import { Timer } from "../timer/Timer";
import { useState, useEffect } from "react";

import { useTimerContext } from "../../hooks/useTimerContext.jsx";
import { ProjectHeader } from "./ProjectHeader";

export function ProjectDetail() {
  const [sum, setSum] = useState(0);
  const { loading, times, formatTime } = useTimerContext();
  const { project } = useTimerContext();

  const [timeProject, setTimeProject] = useState([]);

  useEffect(() => {
    if ((loading == false) & (project !== undefined)) {
      setTimeProject([]);
      mapTimes();
      sumTimes();
    }
  }, [loading, times]);

  const mapTimes = () => {
    times.map((time) => {
      timeProject.push(time.time);
    });
  };
  //esto ya no hace falta porque solo recibo los
  //tiempos del titulo, hay que reescribir ??

  const sumTimes = () => {
    let adding = 0;
    console.log(timeProject);
    for (let i = 0; i < timeProject.length; i++) {
      adding += timeProject[i];
    }
    console.log(adding);
    setSum(formatTime(adding));
  };

  return (
    <div>
      <ProjectHeader />
      <Timer />
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          <h1>Previous times</h1>
          {times.map((time) => {
            return (
              <div key={time.id}>
                <p>{formatTime(time.time)}</p>
              </div>
            );
          })}
          <h1>Total time</h1>
          <p>{sum}</p>
        </div>
      )}
    </div>
  );
}
