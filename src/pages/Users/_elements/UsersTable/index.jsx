import React from 'react'


function UsersTable({ users, isLoading }) {
  return (
    <table>
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
            }) => (
              <tr key={id}>
                <td>{id}</td>
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
  );
}

export default React.memo(UsersTable);