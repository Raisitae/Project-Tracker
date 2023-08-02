import { useEffect } from "react";
import { useState } from "react";
import { formatTime } from "./FormatTime.jsx";
import { SaveTime } from "./SaveTime.jsx";

export function Timer({ title }) {
  const [time, setTime] = useState(0);
  const [timeDisplay, setTimeDisplay] = useState("00:00:00");
  const [timerOn, setTimerOn] = useState(false);

  const resetTimer = () => {
    setTimerOn(false);
    setTime(0);
    setTimeDisplay("00:00:00");
  };

  const handleStart = () => {
    setTimerOn(true);
  };

  const handlePause = () => {
    setTimerOn(false);
  };

  useEffect(() => {
    if (timerOn) {
      const interval = setInterval(() => {
        // let a = new Date();
        // let thistime = a.getTime();
        // console.log(thistime);
        setTime(time + 1);
        // console.log(thistime);
      }, 1000);
      setTimeDisplay(formatTime(time));

      return () => clearInterval(interval);
    }
  }, [timerOn, time]);

  return (
    <div>
      <p>This is a timer!</p>
      <h1>{timeDisplay}</h1>
      <button
        onClick={timerOn ? handlePause : handleStart}
        style={{ margin: "0 10px 0 0" }}>
        {timerOn ? "Pause" : time === 0 ? "Start" : "Resume"}
      </button>
      <button onClick={resetTimer} style={{ margin: "0 10px 0 0" }}>
        Reset
      </button>
      <SaveTime title={title} time={time} />
    </div>
  );
}
