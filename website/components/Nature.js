import React from 'react';
import { naturesDatas } from '../pages/navbarDatas';
import styles from '../styles/Nature.module.css';


const Nature = () => {
  return (
    <div className={styles.nature__container}>
      {naturesDatas.map((item, i) => {
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

export default Nature