import React from 'react';
import { monthDatas } from '../pages/monthDatas';
import styles from '../styles/Month.module.css';

const Month = () => {
  return (
    <div className={styles.flex__container}>
        {
            monthDatas.map((item, i) => {
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

export default Month;