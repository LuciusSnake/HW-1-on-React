import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import Modal from '../../components/Modal';
import DashboardForm from './_element/DashboardForm';
import Card from '../../components/Card/Card'
import { removePostApi } from "../../helper/api/posts";

import style from './style.module.scss';


function Dashboard() {
  const [isOpen, setOpen] = useState(false);
  const [editModal, setEditModal] = useState(null);
  const [posts, setPosts] = useState([]);
  const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);

  const onToggle = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);
  
  const onRemove = useCallback((id) => {
    removePostApi(id).then((data) => {
      const { list } = data;

      setPosts(list);
    });
  }, []);

  const onEdit = useCallback(
    (id) => {
      setEditModal(posts.find((post) => post.id === id));
      onToggle();
    },
    [posts, onToggle]
  );

  const onCheckboxClick = useCallback(
    (id) => {
      const hasCheckbox = checkedCheckboxes.includes(id);

      if (hasCheckbox) {
        setCheckedCheckboxes((prevState) =>
          prevState.filter((item) => item !== id)
        );
      } else {
        setCheckedCheckboxes((prevState) => [...prevState, id]);
      }
    },
    [checkedCheckboxes]
  );

  useEffect(() => {
    // getPostsApi().then((data) => {
    //   const { list } = data;

    //   setPosts(list);
    // });

    axios.get("http://localhost:8080/api/posts").then((response) => {
      const { list } = response.data;

      setPosts(list);
    });
  }, []);

  return (
    <div>
      <div className={style.activeContainer}>
        <button className={style.button} onClick={onToggle}>
          Open
        </button>

        {/* {!!checkedCheckboxes.length && (
          <h3>Активных постов: {checkedCheckboxes.length}</h3>
        )} */}

        <h3>Активных постов: {checkedCheckboxes.length}</h3>
      </div>

      {posts.map((post, index) => (
        <Card
          key={post.id}
          post={post}
          index={index}
          onRemove={onRemove}
          onEdit={onEdit}
          checkedCheckboxes={checkedCheckboxes}
          onCheckboxClick={onCheckboxClick}
        />
      ))}

      <Modal isShow={isOpen} onHide={onToggle}>
        <DashboardForm
          onClose={onToggle}
          setPosts={setPosts}
          editModal={editModal}
          setEditModal={setEditModal}
        />
      </Modal>
    </div>
  );
}

export default Dashboard;