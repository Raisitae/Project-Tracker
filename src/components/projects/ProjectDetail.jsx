import { ProjectInput } from "./ProjectInput";
import { Timer } from "../timer/Timer";
import { useState, useEffect } from "react";
import { useProjectContext } from "../../hooks/useProjectContext.jsx";

export function ProjectDetail() {
  const [name, setName] = useState("");
  const handleName = (name) => {
    setName(name);
  };
  const { loading, times, getTimes, setLoading, formatTime } =
    useProjectContext();

  useEffect(() => {
    console.log(loading);
    console.log(times);
  }, [loading]);

  const handleTimes = () => {
    setLoading(true);
    getTimes();
  };

  return (
    <div>
      {name !== "" ? (
        <h3 className="text-xl tracking-wide">{name}</h3>
      ) : (
        <ProjectInput handleName={handleName} />
      )}
      <Timer title={name} />
      <button
        className="btn-primary bg-blue-500"
        onClick={handleTimes}
        style={{ margin: "0 10px 0 0" }}>
        get times
      </button>
      {loading ? (
        <h1>loading</h1>
      ) : (
        times.map((time) => {
          return (
            <div key={time.id}>
              <h1>{time.title ? time.title : "Sin titulo"}</h1>
              <h1>{formatTime(time.time)}</h1>
            </div>
          );
        })
      )}
    </div>
  );
}
