import React, { useState } from 'react'
import Modal from '../../components/Modal';
import DashboardForm from './_element/DashboardForm';
import style from './style.module.scss';
import Card from './Cards/Card'


function Dashboard() {
  const [ isOpen, setOpen ] = useState(false);

  const onToggle = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <div>
      <button className={style.button} onClick={onToggle}>Open</button>

      <Card />

      <Modal isShow={isOpen} onHide={onToggle}>
        <DashboardForm onClose={onToggle} />
      </Modal>
    </div>
  );
}

export default Dashboard;