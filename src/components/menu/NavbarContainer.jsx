import { useState, useEffect } from "react";
import { useProjectContext } from "../../hooks/useProjectContext.jsx";

export function NavbarContainer() {
  const { loading, times, getTimes, setLoading, formatTime } =
    useProjectContext();

  useEffect(() => {
    console.log(loading);
    console.log(times);
  }, [loading]);

  return (
    <div className="nav-bar">
      <p className="text-slate-200 font-semibold">This will be a menu</p>

      {loading ? (
        <h1>loading</h1>
      ) : (
        times.map((time) => {
          return (
            <div key={time.id}>
              <h1 className="project-button">
                {time.title ? time.title : "Sin titulo"}
              </h1>
            </div>
          );
        })
      )}
    </div>
  );
}
