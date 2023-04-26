import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = (props) => {
  const dietsString = props.diets?.map((diet, index) => {
    if (index < props.diets.length - 1) return diet + ', ';
    return diet;
  });
  return (
    <div className={style.div}>
      <Link to={`/detail/${props.id}`}>
        <img src={props.image} alt='Recipe pic' className={style.img} />
      </Link>
      <h2 className={style.h2}>{props.name}</h2>
      <h5 className={style.h5}>Diets</h5>
      <p className={style.p}>{dietsString}</p>
    </div>
  );
};

export default Card;
