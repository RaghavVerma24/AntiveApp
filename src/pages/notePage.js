import React from 'react';
import Comments from '../components/NotePage/Comments';
import NoteEditor from '../components/NotePage/NoteEditor';
import "./notePage.css"


const NotePage = (props) => {

    const note = props.location.state;

    return(
        <div className="row note-page-container">
            <div  className="col-md-8 col-sm-12">
                <NoteEditor
                    noteId={note.id}
                />
            </div>
            <div className="col-md-4 sol-sm-12">
                <Comments
                    noteId={note.id}
                />
            </div>
           
        </div>
    )
}



export default NotePage