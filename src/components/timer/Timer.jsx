import { useEffect } from "react";
import { formatTime } from "./FormatTime.jsx";
import { SaveTime } from "./SaveTime.jsx";
import { useTimerContext } from "../../hooks/useTimerContext.jsx";

export function Timer({ title }) {
  const {
    resetTimer,
    time,
    setTime,
    timerOn,
    setTimerOn,
    setTimeDisplay,
    timeDisplay,
  } = useTimerContext();

  useEffect(() => {
    if (timerOn) {
      const interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      setTimeDisplay(formatTime(time));

      return () => clearInterval(interval);
    }
  }, [timerOn, time]);

  const handleStart = () => {
    setTimerOn(true);
  };

  const handlePause = () => {
    setTimerOn(false);
  };

  return (
    <div>
      <h1 className="text-6xl font-bold tracking-wider font-mono text-black sm:text-6xl my-8">
        {timeDisplay}
      </h1>
      <button
        className="btn-primary  bg-blue-500"
        onClick={timerOn ? handlePause : handleStart}
        style={{ margin: "0 10px 0 0" }}>
        {timerOn ? "Pause" : time === 0 ? "Start" : "Resume"}
      </button>
      <button
        className="btn-primary bg-blue-500"
        onClick={resetTimer}
        style={{ margin: "0 10px 0 0" }}>
        Reset
      </button>

      <SaveTime title={title} time={time} />
    </div>
  );
}
