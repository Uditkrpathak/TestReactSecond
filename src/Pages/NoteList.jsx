import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NoteList = () => {
  const { addNote, body, setBody, title, setTitle, light } =
    useContext(UserContext);
 
    const notify = () => toast('Added Succesfully');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (addNote) {
      addNote({ id: Date.now(), title, body });
      setTitle("");
      setBody("");
      
    }
  };
  
  return (
    <div
      className={`w-full h-screen flex items-center justify-center ${
        
                light ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
                  className={`p-6 w-96 rounded-xl shadow-lg ${
          light ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2 
        className="mb-6 text-2xl font-bold text-center">Add Note</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className={`p-3 w-full border rounded-lg ${
              light ? "bg-blue-200 text-green-900" : "bg-gray-100 text-black"
            }`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
           
          />

          <input
            placeholder="Body"
            className={`p-3 w-full border rounded-lg ${
              light ? "bg-blue-200 text-green-900" : "bg-gray-100 text-black"
            }`}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />

          <button
            type="submit"
            onClick={notify} 
            className="w-full px-4 py-2 text-white transition bg-green-500 rounded-lg hover:bg-green-600"
          >
            Add Note
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default NoteList;
