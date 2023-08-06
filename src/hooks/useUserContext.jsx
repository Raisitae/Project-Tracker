import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

function useUserContext() {
  return useContext(UserContext);
}

export { useUserContext };
