import { createContext, useState, useCallback, useEffect } from "react";
import { db } from "../firebase/FirebaseConfig.jsx";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { useUserContext } from "../hooks/useUserContext.jsx";
import { useTimerContext } from "../hooks/useTimerContext.jsx";

export const ProjectContext = createContext();

function ProviderProject({ children }) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectExists, setProjectExists] = useState(false);
  const { user } = useUserContext();
  const { times, project, setProject } = useTimerContext();

  const getProjects = useCallback(async () => {
    const arrayProjects = [];
    const projectRef = collection(db, user);
    try {
      const querySnapshot = await getDocs(projectRef);
      querySnapshot.forEach((doc) => {
        arrayProjects.push(doc.data());
      });
      setProjects(arrayProjects);
      setLoading(false);
      console.log("get projects done");
    } catch (e) {
      console.log("Error getting document:", e);
    }
  }, [user, project]);

  const pushProject = async (title) => {
    try {
      const docRef = doc(db, user, title);
      console.log(docRef);
      const docSend = await setDoc(docRef, {
        title: title,
      });
      console.log("id ", docSend);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const selectProject = (title) => {
    setProject(title);
  };

  const handleProject = (title) => {
    setLoading(true);
    setProject(title);
    pushProject(title);
    setProjectExists(true);
  };

  useEffect(() => {
    if (user !== "") {
      getProjects();
      console.log("rerender projectC");
    }
  }, [getProjects, user]);

  const value = {
    loading,
    setLoading,
    times,
    project,
    setProject,
    getProjects,
    pushProject,
    projects,
    projectExists,
    setProjectExists,
    handleProject,
    selectProject,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

export { ProviderProject };
