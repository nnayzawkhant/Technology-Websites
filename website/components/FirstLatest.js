import React, { useState, useEffect } from 'react';
import styles from '../styles/FirstLatest.module.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { firstLatestDatas } from '../pages/firstLatestDatas';
import {format} from "timeago.js";
import axios from 'axios';


const FirstLatest = () => {
    const [visiable, setVisiable] = useState(3);

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
        setVisiable(prev => prev + 3);
    }
  return (
    <div className={styles.firstlatest__container}>
        {
            allPosts?.results?.slice(0, visiable).map((item, i) => {
                return (
                    <div className={styles.firstlatest__card} key={i}>
                        <a href={`details/${item.id}`} className={styles.first__img}><img src={item.photo}/></a>
                        <div className={styles.first__late}>
                            <div className={styles.span__doc}>
                                <div className={styles.span__under}></div>
                                <span className={styles.first__span}>{item.category.categoryname}</span>
                            </div>
                            <a href='#'><h2>{item.title}</h2></a>
                            <div className={styles.first__main}>
                                <div className={styles.first__little}>
                                    <img src={item.user?.profilePic}/>
                                    <span>{item.user?.name}</span>
                                    <div className={styles.first__icon}>
                                        <AccessTimeIcon fontSize='smaller'/>
                                        <span>{format(item.createdAt)}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: item.desc.slice(0, 150)}} />
                            </div>
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