import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.tit}</h1>
      <p>{props.text}</p>
      <button onClick={() => {props.delItem(props.id)}}>DELETE</button>
    </div>
  );
}

export default Note;
