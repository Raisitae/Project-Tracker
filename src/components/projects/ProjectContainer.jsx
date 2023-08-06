import { ProjectDetail } from "./ProjectDetail.jsx";
import { ProjectCreate } from "./ProjectCreate.jsx";
import { useCallback, useEffect } from "react";
import { useTimerContext } from "../../hooks/useTimerContext.jsx";

export function ProjectContainer() {
  const { project } = useTimerContext();

  const projectListener = useCallback(() => {
    if (project !== undefined && project !== "") {
      console.log(project);

      return <ProjectDetail />;
    } else {
      return <ProjectCreate />;
    }
  }, [project]);

  useEffect(() => {
    console.log(project);
  }, [project]);

  return <div>{projectListener()}</div>;
}
