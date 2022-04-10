import React, { useEffect, useState } from "react";
import { editPostApi, savePostApi } from "../../../../helper/api/posts";
import style from './style.module.scss';
import { v4 as uuidv4 } from 'uuid';

function DashboardForm({ onClose, setPosts, editModal, setEditModal }) {
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
      alert("Количество символов не должно превышать 5 в названии");
      return;
    }

    if (state.title.length === 0) {
      alert("Введите название");
      return;
    }

    if (state.content.length > 15) {
      alert("Количество символов не должно превышать 15 в тексте");
      return;
    }

    if (state.content.length === 0) {
      alert("Введите текст");
      return;
    }

    const { title, content } = state;

    if (!editModal) {
      const body = { id: uuidv4(), title, content };

      // new Promise((res, rej) => {
      //   res({})
      //   rej("error")
      // }).then(data => data)
      // .catch(err => err)
      // .finally(() => {})

      savePostApi(body)
        .then((data) => {
          const { list } = data;
          setPosts(list);
        })
        .then(() => {
          onClose();
        });
    } else {
      editPostApi(state.id, state)
        .then((data) => {
          const { list } = data;
          setPosts(list);
        })
        .then(() => {
          onClose();
        });
    }
  };

  useEffect(() => {
    if (editModal) {
      setState(editModal);
    }

    return () => {
      setEditModal(null);
    };
  }, [editModal, setEditModal]);

  return (
    <div className={style.form}>
      <label>
        <p>Title</p>
        <input
          className={style.title}
          type="text"
          value={state.title}
          onChange={handleChange("title")}
        />
      </label>

      <label>
        <p>Content</p>
        <textarea
          className={style.content}
          value={state.content}
          onChange={handleChange("content")}
        />
      </label>

      <button className={style.save} onClick={onSave}>
        {editModal ? "Edit" : "Save"}
      </button>
    </div>
  );
}

export default DashboardForm