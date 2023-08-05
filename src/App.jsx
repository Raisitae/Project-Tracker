import "./App.css";
import { ProjectContainer } from "./components/projects/ProjectContainer";
import { NavbarContainer } from "./components/menu/NavbarContainer";
import { useProjectContext } from "./hooks/useProjectContext";
import { LoginView } from "./views/LoginView";
import { useEffect } from "react";
function App() {
  const { user, handleUser } = useProjectContext();

  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("user"));
    console.log(userLocal);

    if ((userLocal != "") & (userLocal != null)) {
      handleUser(userLocal);
    }
  }, []);

  return (
    <div id="root">
      <div className="main-page max-w-full">
        <NavbarContainer />
        {user === "" ? <LoginView /> : <ProjectContainer />}
      </div>
    </div>
  );
}

export default App;
