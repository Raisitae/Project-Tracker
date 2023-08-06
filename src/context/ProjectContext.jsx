import { createContext, useState, useCallback, useEffect } from "react";
import { db } from "../firebase/FirebaseConfig.jsx";
import { collection, onSnapshot } from "firebase/firestore";
import { useUserContext } from "../hooks/useUserContext.jsx";
import { useTimerContext } from "../hooks/useTimerContext.jsx";

export const ProjectContext = createContext();

function ProviderProject({ children }) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectExists, setProjectExists] = useState(false);
  const { user } = useUserContext();
  const { times, project, setProject } = useTimerContext();

  const getProjects = async () => {
    const arrayProjects = [];
    const projectRef = collection(db, user);
    onSnapshot(projectRef, (snapshot) => {
      snapshot.docs.map((doc) => {
        return arrayProjects.push({
          id: doc.id,
          title: doc.data().title,
          time: doc.data().time,
          date: doc.data().date,
        });
      });
      arrayProjects.sort((a, b) => a.title.localeCompare(b.title));
      setProjects(arrayProjects);
      console.log(projects);
      setLoading(false);
    });
  };

  const selectProject = (title) => {
    setProject(title);
    setLoading(true);
  };

  const handleProject = (title) => {
    setLoading(true);
    setProject(title);
    setProjectExists(true);
  };

  const handleCallback = useCallback(() => {
    console.log("when is this updated", project);
    setLoading(false);
  }, [loading, project]);

  useEffect(() => {
    handleCallback();
    if ((user !== "") & (project !== "")) {
      getProjects();
      //make callback function
    }
  }, [user, project, handleCallback]);

  const value = {
    loading,
    setLoading,
    times,
    project,
    setProject,
    getProjects,
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
