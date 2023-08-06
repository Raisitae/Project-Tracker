import "./App.css";
import { ProjectContainer } from "./components/projects/ProjectContainer";
import { NavbarContainer } from "./components/menu/NavbarContainer";
import { useUserContext } from "./hooks/useUserContext";
import { LoginView } from "./views/LoginView";
import { useEffect } from "react";
import { MainView } from "./views/MainView";
function App() {
  const { user, handleUser } = useUserContext();

  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("user"));
    if ((userLocal != "") & (userLocal != null)) {
      handleUser(userLocal);
    }
  }, []);

  return (
    <div id="root">
      <div className="main-page max-w-full">
        <NavbarContainer />
        {user === "" ? <LoginView /> : <MainView />}
      </div>
    </div>
  );
}

export default App;
