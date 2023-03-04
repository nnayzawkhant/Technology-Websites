import React, { useState, useEffect } from 'react';
import styles from '../styles/Secondlatest.module.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { secondLatestDatas } from '../pages/secondLatestDatas';
import {format} from "timeago.js";
import axios from 'axios';


const SecondLatest = () => {
    const [visiable, setVisiable] = useState(4);

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        fetchAllPosts()
    }, [])

    const fetchAllPosts = async () => {
        const fetch = await (await axios.get('http://localhost:5000/v1/posts/public/latest_posts/?sortBy=_id:desc')).data;
        console.log(fetch)
        setAllPosts(fetch)
    }

    const showMoreItems = () => {
        setVisiable(prev => prev + 2);
    }
  return (
    <div className={styles.secondlate__container}>
        <div className={styles.secondlate__wrapper}>
            {
                allPosts.results?.slice(0, visiable).map((item, i) => {
                    return (
                        <div className={styles.secondlate__card} key={i}>
                            <a href='#' className={styles.secondlate__img}><img src={item.photo}/></a>
                            <div className={styles.secondlate__late}>
                                <div className={styles.span__doc}>
                                    <div className={styles.span__under}></div>
                                    <span className={styles.secondlate__span}>{item.category.categoryname}</span>
                                </div>
                                <a href='#'><h2>{item.title}</h2></a>
                                <div className={styles.secondlate__main}>
                                    <div className={styles.secondlate__little}>
                                        <img src={item.user?.profilePic}/>
                                        <span>{item.user?.name}</span>
                                        <div className={styles.secondlate__icon}>
                                            <AccessTimeIcon fontSize='smaller'/>
                                            <span>{format(item.createdAt)}</span>
                                        </div>
                                    </div>
                                    
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