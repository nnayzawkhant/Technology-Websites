import React from 'react';
import { memesDatas } from '../pages/cultureDatas';
import styles from '../styles/Nature.module.css';


const Memes = () => {
  return (
    <div className={styles.nature__container}>
      {memesDatas.map((item, i) => {
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

export default Memes