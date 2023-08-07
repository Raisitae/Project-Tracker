import { useUserContext } from "../../hooks/useUserContext.jsx";
import { useTimerContext } from "../../hooks/useTimerContext.jsx";

export function Userinfo() {
  const { user, handleUser } = useUserContext();
  const { setProject } = useTimerContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(""));
    handleUser("");
    setProject("");
  };

  return (
    <div>
      <h1> Welcome {user}</h1>
      <button onClick={handleSubmit} className="btn-primary bg-blue-500">
        Logout
      </button>
    </div>
  );
}
