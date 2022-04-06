import React, { useState } from 'react'
import Modal from '../../components/Modal';
import DashboardForm from './_element/DashboardForm';


function Dashboard() {
  const [ isOpen, setOpen ] = useState(false);

  const onToggle = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <div>
      <button onClick={onToggle}>open</button>

      <Modal isShow={isOpen} onHide={onToggle}>
        <DashboardForm onClose={onToggle} />
      </Modal>
    </div>
  );
}

export default Dashboard;