import "./App.css";
import { ProjectContainer } from "./components/projects/ProjectContainer";
import { NavbarContainer } from "./components/menu/NavbarContainer";

function App() {
  return (
    <div id="root">
      <div className="main-page max-w-full">
        <NavbarContainer />
        <ProjectContainer />
      </div>
    </div>
  );
}

export default App;
