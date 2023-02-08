import React from 'react';
import { healthDatas } from '../pages/navbarDatas';
import styles from '../styles/Nature.module.css';


const Health = () => {
  return (
    <div className={styles.nature__container}>
      {healthDatas.map((item, i) => {
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

export default Health;