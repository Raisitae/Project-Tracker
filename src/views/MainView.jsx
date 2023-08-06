import { ProjectContainer } from "../components/projects/ProjectContainer";
import { Userinfo } from "../components/user/Userinfo";
import { NavbarContainer } from "../components/menu/NavbarContainer";

export function MainView() {
  return (
    <div className="main-page max-w-full">
      <NavbarContainer />

      <div className="project-container">
        <Userinfo />
        <ProjectContainer />
      </div>
    </div>
  );
}
