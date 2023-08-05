import { createContext, useState, useCallback, useEffect } from "react";
import { db } from "../firebase/FirebaseConfig.jsx";
import {
  serverTimestamp,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const ProjectContext = createContext();

function Provider({ children }) {
  const [time, setTime] = useState(0);
  const [timeDisplay, setTimeDisplay] = useState("00:00:00");
  const [timerOn, setTimerOn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [times, setTimes] = useState([]);
  const [user, setUser] = useState("");
  const [project, setProject] = useState("");

  const timersRef = collection(db, "timerscollection");

  const handleUser = useCallback((user) => {
    setUser(user);
  }, []);

  const resetTimer = () => {
    setTimerOn(false);
    setTime(0);
    setTimeDisplay("00:00:00");
  };

  const formatTime = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - hours * 3600 - minutes * 60;

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return `${hours}:${minutes}:${seconds}`;
  };

  const pushTimes = (title) => {
    console.log(time);
    const dataSend = addDoc(timersRef, {
      title: title,
      time: time,
      date: serverTimestamp(),
      user: user,
    });
    dataSend
      .then((res) => {
        console.log("id ", res.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const getTimes = async () => {
    setTimes([]);
    console.log("1");
    const q = query(timersRef, where("user", "==", user));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setTimes((prev) => [
          ...prev,
          {
            id: doc.id,
            title: doc.data().title,
            time: doc.data().time,
            date: doc.data().date,
          },
        ]);
      });
      console.log("2", times);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const selectProject = async () => {
    await getTimes();
    const timesProject = times.filter((time) => time.title === project);
    console.log(timesProject, "funciono");
    console.log(timesProject);
  };

  const handleProject = (title) => {
    setProject(title);
    console.log(project);
  };

  const getTimesBack = useCallback(() => {
    if (user !== "") {
      getTimes();
    }
  }, [loading, user, project]);

  /*
  const getTimes = () => {
    const arrayTimes = [];
    onSnapshot(timersRef, (snapshot) => {
      snapshot.docs.map((doc) => {
        return arrayTimes.push({
          id: doc.id,
          title: doc.data().title,
          time: doc.data().time,
          date: doc.data().date,
        });
      });
      arrayTimes.sort((a, b) => a.title.localeCompare(b.title));
      setTimes(arrayTimes);
      setLoading(false);
    });
  };
  */

  useEffect(() => {
    if (user !== "") {
      getTimesBack();
    }
  }, [getTimesBack, user]);

  const value = {
    pushTimes,
    time,
    resetTimer,
    timeDisplay,
    timerOn,
    setTimerOn,
    setTime,
    setTimeDisplay,
    setTimes,
    getTimes,
    getTimesBack,
    loading,
    setLoading,
    times,
    formatTime,
    handleUser,
    user,
    setProject,
    handleProject,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

export { Provider };
