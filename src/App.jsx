import "./App.css";
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
    <div className="root">{user === "" ? <LoginView /> : <MainView />}</div>
  );
}

export default App;
