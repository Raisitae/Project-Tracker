import { useProjectContext } from "../../hooks/useProjectContext.jsx";

export function Userinfo() {
  const { user, handleUser } = useProjectContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(""));
    handleUser("");
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
