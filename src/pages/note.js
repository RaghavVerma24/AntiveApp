import React from "react";
import { NewNote } from "../Notes/components/NewNote/NewNote";
import { SidePannel } from "../Notes/components/SidePannel/SidePannel";
import { DisplayNotes } from "../Notes/components/DisplayNotes/DisplayNotes";
import { EditNote } from "../Notes/components/EditNote/EditNote";
import { useNotes } from "../Notes/ContextProvider/NotesContext";
import { HeaderNotes } from "../Notes/components/HeaderNotes/HeaderNotes";
import './note.css'

const Notes = () => {
  const { addNote, newNoteFlag } = useNotes();
  function saveOnOutOfFocus() {
    if (newNoteFlag) {
      addNote();
    }
  }

  return (
    <div className="AppNotes" onClick={saveOnOutOfFocus}>
      <SidePannel />
      <HeaderNotes />
      <div className="main-container">
        <NewNote />
        <DisplayNotes />
        <EditNote />
      </div>
    </div>
  );
};

export default Notes;
