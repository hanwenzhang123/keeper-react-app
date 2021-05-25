import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  }); //create the stateful constance

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote, //spread the current note that already exist
        [name]: value //[]string name of the key turns to the real key, make it key-value object
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note); //important to use for onAdd, pass the current created note
    setNote({   //go back to the original starting point
      title: "",
      content: ""
    });
    event.preventDefault();  //prevent reload default
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
