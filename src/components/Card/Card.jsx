import React, { useMemo } from 'react';
import style from './card.module.scss';


function Card({post, index, onRemove, onEdit, checkedCheckboxes, onCheckboxClick}) {
  const checked = useMemo(
    () => checkedCheckboxes.includes(post.id),
    [checkedCheckboxes, post]
  );
  
  return (
    <div className={style.card}>
      <input type={"checkbox"} checked={checked} onChange={() => onCheckboxClick(post.id)} />

      <h3>
        {`${index}. ${post.title}`}
      </h3>

      <p>{post.content}</p>

      <button className={style.remove} onClick={() => {onRemove(post.id)}}>Delete</button>
      <button className={style.edit} onClick={() => {onEdit(post.id)}}>Edit</button>
    </div>
  );
}

export default React.memo(Card);
