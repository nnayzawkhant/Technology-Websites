import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import styles from '../../styles/Categories.module.css';
import React, { useState } from 'react'
import RightLatest from '../../components/RightLatest';
import { firstLatestDatas } from '../firstLatestDatas';
import axios from 'axios';
import {format} from "timeago.js";
import Link from 'next/link';
import Image from 'next/image';

const Categories = ({allCats}) => {
    console.log(allCats.results?.category)
    const [visiable, setVisiable] = useState(3);

    const showMoreItems = () => {
        setVisiable(prev => prev + 3);
    }
  return (
    <div className={styles.categories__container}>
        <div className={styles.firstlatest__container}>
            
        {
            allCats?.results?.slice(0, visiable).map((item, i) => {
                return (
                    <div className={styles.firstlatest__card} key={i}>
                        <Link href={`/details/${item.id}`} className={styles.first__img} passHref><Image src={item.photo} width={500} height={500} alt=''/></Link>
                        <div className={styles.first__late}>
                            <div className={styles.span__doc}>
                                <div className={styles.span__under}></div>
                                <Link href={`${item.category?.id}`} passHref><span className={styles.first__span}>{item.category?.categoryname}</span></Link>
                            </div>
                            <Link href={`/details/${item.id}`} passHref><h2>{item.title}</h2></Link>
                            <div className={styles.first__main}>
                                <div className={styles.first__little}>
                                    <Image src={item.user?.profilePic} width={30} height={30} alt=''/>
                                    <span>{item.user?.name}</span>
                                    <div className={styles.first__icon}>
                                        <AccessTimeIcon fontSize='small'/>
                                        <span>{format(item.createdAt)}</span>
                                    </div>
                                </div>
                                
                            </div>
                                <p dangerouslySetInnerHTML={{ __html: item.desc.slice(0, 150)}} />
                        </div>
                    </div>
                )
            })
        }
        <button className={styles.firstlate__button} onClick={showMoreItems}>LOAD MORE</button>
    </div>
      <div className={styles.categories__right}>
              <RightLatest/>
            
          </div>
    </div>
  )
}

export const getServerSideProps = async ({params}) => {
    const allResults = await (await axios.get(`http://localhost:5000/v1/posts/public/latest_posts/?category=${params.id}`)).data;
    return {
        props: {
            allCats : allResults,
        },
    }
  };

export default Categories