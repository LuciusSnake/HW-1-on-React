import React, { useState } from 'react'

import '../../index.scss'
import style from "./style.module.scss"

// options = [{value: "name", label: "By Name", disabled: boolean}]

function SortSelect({options, onSort}) {
  const [select, setSelect] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;

    setSelect(value);
  };

  const handleSort = () => {
    onSort(select);
  };

  return (
    <div className={style.selectWrapper}>
      <select onChange={handleChange} value={select} className={style.select}>
        {options.map(({ value, label, disabled }) => (
          <option key={value} value={value} disabled={disabled}>
            {label}
          </option>
        ))}
      </select>
      <button className={"submit"} onClick={handleSort}>
        Sort
      </button>
    </div>
  );
}

export default SortSelect