import { createContext } from "react";
import { db } from "../firebase/FirebaseConfig.jsx";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

export const ProjectContext = createContext();

function Provider({ children }) {
  const pushTimes = (time, title) => {
    const timersRef = collection(db, "timerscollection");

    console.log(time);

    const dataSend = addDoc(timersRef, {
      title: title,
      time: time,
      date: serverTimestamp(),
    });

    dataSend
      .then((res) => {
        console.log("id ", res.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const value = { pushTimes };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

export { Provider };
