import React from "react";

function CreateArea(props) {

  const [head, setHead] = React.useState('');
  const [para, setPara] = React.useState('');

  function handleHead(event) {
    setHead(event.target.value);
  }

  function handlePara(event) {
    setPara(event.target.value);
  }

  function handleClick() {
    var note = {
      title: head,
      text: para
    }

    props.clicker(note);
    setHead('');
    setPara('');
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleHead} name="title" placeholder="Title" value={head} />
        <textarea onChange={handlePara} name="content" placeholder="Take a note..." rows="3" value={para} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
