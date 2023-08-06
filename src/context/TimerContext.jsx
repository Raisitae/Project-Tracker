import { createContext, useState, useCallback, useEffect } from "react";
import { db } from "../firebase/FirebaseConfig.jsx";
import {
  serverTimestamp,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { useUserContext } from "../hooks/useUserContext.jsx";

export const TimerContext = createContext();

function ProviderTimer({ children }) {
  const [time, setTime] = useState(0);
  const [timeDisplay, setTimeDisplay] = useState("00:00:00");
  const [timerOn, setTimerOn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [times, setTimes] = useState([]);
  const [project, setProject] = useState("");

  const { user } = useUserContext();

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

  const pushTimes = async (title) => {
    console.log(time);
    try {
      const userRef = collection(db, user, project, "timers");
      const dataSend = await addDoc(userRef, {
        title: title,
        time: time,
        date: serverTimestamp(),
        user: user,
      });
      console.log("id ", dataSend);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const getTimes = () => {
    const arrayTimes = [];
    setTimes([]);
    console.log("1");
    const userRef = collection(db, user, project, "timers");
    onSnapshot(userRef, (snapshot) => {
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

  const getTimesBack = useCallback(() => {
    if (project !== "") {
      console.log("name", project);
      getTimes();
    }
  }, [project]);

  useEffect(() => {
    if (project !== undefined) {
      console.log("1");
      getTimesBack();
    }
  }, [getTimesBack, user, project]);

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
    project,
    setProject,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
}

export { ProviderTimer };
