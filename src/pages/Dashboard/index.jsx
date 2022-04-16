import React, { useState, useEffect } from "react";

import Modal from '../../components/Modal';
import DashboardForm from './_element/DashboardForm';
import Card from '../../components/Card/Card'
import { getPostsApi, removePostApi } from "../../helper/api/posts";

import style from './style.module.scss';


function Dashboard() {
  const [ isOpen, setOpen ] = useState(false);
  const [ editModal, setEditModal ] = useState(null);
  const [ posts, setPosts ] = useState([]);
  const [ checkedCheckboxes, setCheckedCheckboxes ] = useState([]);

  const onToggle = () => {
    setOpen((prevState) => !prevState)
  }
  
  const onRemove = (id) => {
    removePostApi(id)
      .then(data => {
        const { list } = data;

        setPosts(list);
      });
  }

  const onEdit = (id) => {
    setEditModal(posts.find(post => post.id === id));
    onToggle();
  }

  const onCheckboxClick = (id) => {
    const hasCheckbox = checkedCheckboxes.includes(id);

    if(hasCheckbox) {
      setCheckedCheckboxes(prevState => prevState.filter(item => item !== id));
    } else {
      setCheckedCheckboxes(prevState => [...prevState, id]);
    }
  }

  useEffect(() => {
    getPostsApi()
      .then(data => {
        const { list } = data;

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