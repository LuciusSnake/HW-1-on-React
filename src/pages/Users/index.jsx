import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UsersForm from './_elements/UsersForm'
import UsersTable from './_elements/UsersTable'
import SortSelect from '../../components/SortSelect';
import { SORT_SELECT_OPTIONS, SORT_SELECT_TYPES } from '../../constants/usersPage';


function UsersPage() {
  const [ users, setUsers ] = useState([]);
  const [ isLoading, setLoading ] = useState(false);

  const addToAllUsers = (user) => {
    setUsers(prevState => [...prevState, user]);
  }

  // повторить!!!
  const handleSort = (sortKey) => {

    setUsers(prevState => {
      const changedUsers = [...prevState];

      return changedUsers.sort((next, current) => {
        if ((sortKey === SORT_SELECT_TYPES.CITY)) {
          if (next["address"][sortKey] > current["address"][sortKey]) {
            return 1;
          } else if (next["address"][sortKey] < current["address"][sortKey]) {
            return -1;
          }
        }

        if (next[sortKey] > current[sortKey]) {
          return 1;
        } else if (next[sortKey] < current[sortKey]) {
          return -1;
        }

        return 0;
      })
    })
  };

  useEffect(() => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data)
      })
      .finally(() => { setLoading(false); });
  }, []);

  return (
    <div>
      <UsersForm addToAllUsers={addToAllUsers} />
      <SortSelect options={SORT_SELECT_OPTIONS} onSort={handleSort} />
      <UsersTable users={users} isLoading={isLoading} />
    </div>
  );
}

export default UsersPage