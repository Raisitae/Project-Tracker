import { useContext } from "react";
import { TimerContext } from "../context/TimerContext.jsx";

function useTimerContext() {
  return useContext(TimerContext);
}

export { useTimerContext };
