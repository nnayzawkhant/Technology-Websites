import React, { useState } from 'react';
import styles from '../styles/FirstLatest.module.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { firstLatestDatas } from '../pages/firstLatestDatas';

const FirstLatest = () => {
    const [visiable, setVisiable] = useState(3);

    const showMoreItems = () => {
        setVisiable(prev => prev + 3);
    }
  return (
    <div className={styles.firstlatest__container}>
        {
            firstLatestDatas.slice(0, visiable).map((item, i) => {
                return (
                    <div className={styles.firstlatest__card} key={i}>
                        <a href='#' className={styles.first__img}><img src={item.imgone}/></a>
                        <div className={styles.first__late}>
                            <div className={styles.span__doc}>
                                <div className={styles.span__under}></div>
                                <span className={styles.first__span}>{item.type}</span>
                            </div>
                            <a href='#'><h2>{item.desc}</h2></a>
                            <div className={styles.first__main}>
                                <div className={styles.first__little}>
                                    <img src={item.imagetwo}/>
                                    <span>{item.name}</span>
                                    <div className={styles.first__icon}>
                                        {item.icon}
                                        <span>{item.time}</span>
                                    </div>
                                </div>
                                <a href='#'>{item.largeicon}<span>{item.comment}</span></a>
                            </div>
                            <p>{item.letter}</p>
                        </div>
                    </div>
                )
            })
        }
        <button className={styles.firstlate__button} onClick={showMoreItems}>LOAD MORE</button>
    </div>
  )
}

export default FirstLatest