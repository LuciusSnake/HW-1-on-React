import React, { useState } from "react";
import style from './style.module.scss'

function DashboardForm({ onClose }) {
  // state - object, setState - function
  const [state, setState] = useState({
    title: "",
    content: "",
  });

  // function handleChange(name) {
  //   return function (event) {
  //     ...
  //   }
  // }

  // name - string, value - event.target.value
  const handleChange = (name) => (event) => {
    const value = event.target.value;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSave = () => {
    if (state.title.length > 5) {
      alert("Количество символов не должно превышать 5");
    }

    if (state.content.length > 15) {
      alert("Количество символов не должно превышать 15");
    }

    if (state.title.length < 5 && state.content.length < 15) {
      onClose();
    }
  };

  return (
    <div className={style.form}>
      <input
        className={style.title}
        type="text"
        value={state.title}
        onChange={handleChange("title")}
      />

      <textarea
        className={style.content}
        value={state.content}
        onChange={handleChange("content")}
      />

      <button className={style.save} onClick={onSave}>
        Save
      </button>
    </div>
  );
}

export default DashboardForm