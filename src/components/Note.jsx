import React from "react";

function Note() {
  return (        //attribute only applies to the html element like className="note"
    <div className="note"> 
      <h1>This is the note title</h1>
      <p>This is the note content</p>
    </div>
  );
}

export default Note;
