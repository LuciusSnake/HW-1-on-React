import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UsersForm from './_elements/UsersForm'
import UsersTable from './_elements/UsersTable'

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [ isLoading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data)
      })
      .finally(() => { setLoading(false); });
  }, []);

  const addToAllUsers = (user) => {
    setUsers(prevState => [...prevState, user]);
  }

  return (
    <div>
      <UsersForm addToAllUsers={addToAllUsers} />
      <UsersTable users={users} isLoading={isLoading} />
    </div>
  );
}

export default UsersPage