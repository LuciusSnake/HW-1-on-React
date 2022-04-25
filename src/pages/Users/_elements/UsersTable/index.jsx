import React from 'react'
import style from './style.module.scss'


function UsersTable({ users, isLoading }) {
  return (
    <div className={style.wrapper}>
      <table className={style.tableBlur}>
      <thead>
        <tr>
          <th>№</th>
          <th>Name</th>
          <th>Nickname</th>
          <th>Email</th>
          <th>Adress</th>
        </tr>
      </thead>
      <tbody>
        {isLoading && 
          <tr>
            <td colSpan={5}>Loading...</td>
          </tr>
        }
        {!isLoading &&
          users.map(
            ({
              id,
              name,
              username,
              email,
              address: { city, street, suite },
            }, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                  {city}, {street}, {suite}
                </td>
              </tr>
            )
          )}
      </tbody>
    </table>
    </div>
  );
}

export default React.memo(UsersTable);