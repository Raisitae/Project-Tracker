import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext.jsx";

function useProjectContext() {
  return useContext(ProjectContext);
}

export { useProjectContext };
