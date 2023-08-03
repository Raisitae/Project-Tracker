import { createContext, useState, useCallback, useEffect } from "react";
import { db } from "../firebase/FirebaseConfig.jsx";
import {
  serverTimestamp,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";

export const ProjectContext = createContext();

function Provider({ children }) {
  const [time, setTime] = useState(0);
  const [timeDisplay, setTimeDisplay] = useState("00:00:00");
  const [timerOn, setTimerOn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [times, setTimes] = useState([]);

  const resetTimer = () => {
    setTimerOn(false);
    setTime(0);
    setTimeDisplay("00:00:00");
  };

  const timersRef = collection(db, "timerscollection");

  const pushTimes = (title) => {
    console.log(time);
    const dataSend = addDoc(timersRef, {
      title: title,
      time: time,
      date: serverTimestamp(),
      user: "user",
    });
    dataSend
      .then((res) => {
        console.log("id ", res.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

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

  useEffect(() => {
    getTimes();
    if (!loading) {
      console.log(times);
    }
  }, [loading]);

  const formatTime = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - hours * 3600 - minutes * 60;

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return `${hours}:${minutes}:${seconds}`;
  };

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
    loading,
    setLoading,
    times,
    formatTime,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

export { Provider };
