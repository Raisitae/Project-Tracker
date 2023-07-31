import { useEffect } from "react";
import { useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [timeDisplay, setTimeDisplay] = useState("00:00:00");
  const [timerOn, setTimerOn] = useState(false);

  const formatTime = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - hours * 3600 - minutes * 60;

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    setTimeDisplay(`${hours}:${minutes}:${seconds}`);
  };

  const resetTimer = () => {
    setTimerOn(false);
    setTime(0);
    setTimeDisplay("00:00:00");
    console.log(time);
  };

  const handleStart = () => {
    console.log(timerOn);
    setTimerOn(true);
  };

  const handlePause = () => {
    setTimerOn(false);
  };

  useEffect(() => {
    if (timerOn) {
      const interval = setInterval(() => {
        setTime(time + 1);
        formatTime(time);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timerOn, time]);

  return (
    <div>
      <h1>{timeDisplay}</h1>
      <button onClick={timerOn ? handlePause : handleStart}>
        {timerOn ? "Pause" : time === 0 ? "Start" : "Resume"}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
