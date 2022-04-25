import axios from 'axios';
import React, {useState} from 'react'
import style from './style.module.scss'


const initialState = {
  name: "",
  username: "",
  email: "",
  city: "",
  street: "",
  suite: "",
};

function UsersForm({ addToAllUsers }) {
  const [user, setUser] = useState(initialState);

  // TODO post users
  const handleClick = (event) => {
    event.preventDefault();

    const {city, street, suite, ...elseData} = user;

    axios
      .post("https://jsonplaceholder.typicode.com/users", {...elseData, address: { city, street, suite }})
      .then((response) => {
        const data = response.data;
        addToAllUsers(data);
        setUser(initialState);
      });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form className={style.decor}>
      <div className={style.formLeftDecoration}></div>
      <div className={style.formRightDecoration}></div>
      <div className={style.circle}></div>
      <div className={style.formInner}>
        <h3>Добавление нового пользователя</h3>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          name={"name"}
        />

        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
          name={"username"}
        />

        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          name={"email"}
        />

        <input
          type="text"
          placeholder="City"
          value={user.city}
          onChange={handleChange}
          name={"city"}
        />

        <input
          type="text"
          placeholder="Street"
          value={user.street}
          onChange={handleChange}
          name={"street"}
        />

        <input
          type="text"
          placeholder="Suite"
          value={user.suite}
          onChange={handleChange}
          name={"suite"}
        />

        <div className={style.submit}>
        <input onClick={handleClick} type="submit" value="Отправить" />
        </div>
      </div>
    </form>
  );
}

export default React.memo(UsersForm);