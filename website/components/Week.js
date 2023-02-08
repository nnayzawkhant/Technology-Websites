import React from 'react';
import styles from '../styles/Week.module.css';
import { weekDatas } from '../pages/weekDatas';

const Week = () => {
  return (
    <div className={styles.flex__container}>
        {
            weekDatas.map((item, i) => {
                return (
                    <div className={styles.flex__card} key={i}>
                        <img src={item.img}/>
                        <p>0{item.id}</p>
                        <a href='#'><p>{item.desc}</p></a>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Week