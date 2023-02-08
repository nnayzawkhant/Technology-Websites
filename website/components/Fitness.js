import React from 'react';
import { fitnessDatas } from '../pages/cultureDatas';
import styles from '../styles/Nature.module.css';


const Fitness = () => {
  return (
    <div className={styles.nature__container}>
      {fitnessDatas.map((item, i) => {
        return (
          <div className={styles.nature__wrapper} key={i}>
            <div className={styles.nature__image}><img src={item.image}/></div>
            <div><a href='#'>{item.letter}</a></div>
          </div>
        )
      })}
    </div>
  )
}

export default Fitness