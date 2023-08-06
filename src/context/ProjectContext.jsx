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

  const getProjects = () => {
    const arrayProjects = [];
    const projectRef = collection(db, user);
    onSnapshot(projectRef, (snapshot) => {
      snapshot.docs.map((doc) => {
        return console.log({
          id: doc.id,
          title: doc.data().title,
          time: doc.data().time,
          date: doc.data().date,
        });
        // arrayProjects.push({
        //   id: doc.id,
        //   title: doc.data().title,
        //   time: doc.data().time,
        //   date: doc.data().date,
        // });
      });
      console.log(arrayProjects);
      arrayProjects.sort((a, b) => a.title.localeCompare(b.title));
      setProjects(arrayProjects);
      console.log(projects);
      setLoading(false);
    });
  };
  //this functions should only be called when we load the app for the first time
  //or when we push a time to the database
  //in order to reduce the amonut of times we call the database
  // then we should refer to projects and map the state to get the projects
  // or we could use local storage to save the projects.
  // maybe do a function that gets the projects and then saves them to local storage if the user is logged
  // and we only call the database when push a new timer or when the user logs in
  // ill have to check tmr. Also this funtion is not working atm

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
    if (user !== "") {
      getProjects();
      //make callback function
    }
  }, [user, loading]);

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
