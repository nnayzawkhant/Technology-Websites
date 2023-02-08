import React from 'react';
import { fashionDatas } from '../pages/navbarDatas';
import styles from '../styles/Nature.module.css';


const Fashion = () => {
  return (
    <div className={styles.nature__container}>
      {fashionDatas.map((item, i) => {
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

export default Fashion;