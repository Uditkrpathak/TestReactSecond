import React, { useState , useEffect } from "react";
import { createContext } from "react";


export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [IsOpen , setIsOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = (note) => setNotes([note, ...notes]);
  const deleteNote = (id) => setNotes(notes.filter((note) => note.id !== id));



  const requiredValues = {
   IsOpen,
   setIsOpen,
   light,
   setLight,
   notes,
   setNotes,
   loading,
    setLoading,
    addNote,
    deleteNote,
    title,
    setTitle,
    body,
    setBody,
  };

  return (
    <UserContext.Provider value={requiredValues}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
