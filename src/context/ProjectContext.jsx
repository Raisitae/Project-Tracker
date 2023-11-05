import { createContext, useState, useCallback, useEffect } from "react";
import { db } from "../firebase/FirebaseConfig.jsx";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { useUserContext } from "../hooks/useUserContext.jsx";
import { useTimerContext } from "../hooks/useTimerContext.jsx";

export const ProjectContext = createContext();

function ProviderProject({ children }) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectExists, setProjectExists] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedProject, setEditedProject] = useState("");

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

  const deleteProject = async () => {
    console.log(project);
    try {
      const docRef = doc(db, user, project);
      console.log(docRef);
      const docSend = await deleteDoc(docRef);
      setProject("");
      return docSend;
    } catch (error) {
      return error;
    }
  };

  const pushProject = async (title) => {
    try {
      const docRef = doc(db, user, title);
      //this is pushing the title as the id of the document
      // I should push an id
      // so it never changes
      // bc its a document ill have to make an id for it
      // probably it will be better to hace the function in timer context
      // will need to correct every function that uses project/title
      console.log(docRef);
      const docSend = await setDoc(docRef, {
        title: title,
      });
      return docSend;
    } catch (error) {
      return error;
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

  const editProject = async (newTitle) => {
    try {
      const docRef = doc(db, user, project);
      console.log(docRef);
      const docSend = await setDoc(docRef, {
        title: newTitle,
      });
      setProject(newTitle);
      return docSend;
    } catch (error) {
      return error;
    }
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
    deleteProject,
    editing,
    setEditing,
    setEditedProject,
    editProject,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

export { ProviderProject };
