import { ProjectInput } from "./ProjectInput";
import { Timer } from "../timer/Timer";
import { useState } from "react";

export function ProjectDetail() {
  const [name, setName] = useState("");
  const handleName = (name) => {
    setName(name);
  };

  return (
    <div>
      {name !== "" ? <h3>{name}</h3> : <ProjectInput handleName={handleName} />}

      <Timer title={name} />
    </div>
  );
}
