import { ProjectContainer } from "../components/projects/ProjectContainer";
import { Userinfo } from "../components/user/Userinfo";

export function MainView() {
  return (
    <div className="project-container">
      <Userinfo />
      <ProjectContainer />
    </div>
  );
}
