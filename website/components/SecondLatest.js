import React, { useState } from 'react';
import styles from '../styles/Secondlatest.module.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { secondLatestDatas } from '../pages/secondLatestDatas';


const SecondLatest = () => {
    const [visiable, setVisiable] = useState(4);

    const showMoreItems = () => {
        setVisiable(prev => prev + 2);
    }
  return (
    <div className={styles.secondlate__container}>
        <div className={styles.secondlate__wrapper}>
            {
                secondLatestDatas.slice(0, visiable).map((item, i) => {
                    return (
                        <div className={styles.secondlate__card} key={i}>
                            <a href='#' className={styles.secondlate__img}><img src={item.imgone}/></a>
                            <div className={styles.secondlate__late}>
                                <div className={styles.span__doc}>
                                    <div className={styles.span__under}></div>
                                    <span className={styles.secondlate__span}>{item.type}</span>
                                </div>
                                <a href='#'><h2>{item.desc}</h2></a>
                                <div className={styles.secondlate__main}>
                                    <div className={styles.secondlate__little}>
                                        <img src={item.imagetwo}/>
                                        <span>{item.name}</span>
                                        <div className={styles.secondlate__icon}>
                                            {item.icon}
                                            <span>{item.time}</span>
                                        </div>
                                    </div>
                                    <a href='#'>{item.largeicon}<span>{item.comment}</span></a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <button className={styles.secondlate__button} onClick={showMoreItems}>LOAD MORE</button>
    </div>
  )
}

export default SecondLatest