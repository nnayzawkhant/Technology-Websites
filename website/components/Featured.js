import React, { useState } from 'react';
import styles from '../styles/Feature.module.css';
import Week from './Week';
import Month from './Month';
import { popularDatas } from '../pages/popularDatas';
import { featureLatesDatas, featureSwiperDatas } from '../pages/featureSwiperDatas';
import FirstLatest from './FirstLatest';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import SecondLatest from './SecondLatest';
import RightLatest from './RightLatest';
import { useEffect } from 'react';
import LensIcon from '@mui/icons-material/Lens';
import axios from 'axios';
import {format} from "timeago.js";
import NatureSwiper from './NatureSwiper';
import Link from 'next/link';
import Image from 'next/image'

const Featured = () => {
  const [popular, setPopular] = useState(0);

  const [gadgets, setGadgets] = useState(0);

  const [latest, setLatest] = useState(0);

  const [posts, setPosts] = useState([]);
  const [headPosts, setHeadPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesPosts, setCategoriesPosts] = useState([]);
  const [query, setQuery] = useState()

  const loadPosts = async () => {
    const result = await (await axios.get('http://localhost:5000/v1/posts/public/latest_posts/?sortBy=viewCounts:desc&limit=6')).data;
    // console.log(result)
    setPosts(result)
  }

  const loadCategoriesPosts = async () => {
    let API_URL = 'http://localhost:5000/v1/posts/public/latest_posts/'
    if(query){
      API_URL += `?category=${query}`
    }
    const result = await (await axios.get(API_URL)).data;
    // console.log(result, 'hello')
    setCategoriesPosts(result)
  }

  const headerPosts = async () => {
    const result = await (await axios.get('http://localhost:5000/v1/posts/public/latest_posts/?sortBy=_id:desc&limit=4')).data;
    // console.log(result)
    setHeadPosts(result)
  }

  const fetchCategories = async () => {
    const cats = await (await axios.get(`http://localhost:5000/v1/categories/public/latest_categories/`)).data;
    // console.log(cats)
    setCategories(cats);

  }

  useEffect(() => {
    loadPosts()
    headerPosts()
    fetchCategories()
    loadCategoriesPosts()
  }, [query])

  const popularChecked = (index) => {
    setPopular(index)
  }

  const gadgetChecked = (id) => {
    setQuery(id)
  }

  const lastestChecked = (index) => {
    setLatest(index)
  }

  

  return (
    <>
    <section className={styles.section_gp}>
        {
          headPosts?.results?.map((dat, i) => {
            return (
              <div  className={styles.blog_header_content} key={i}>
                <Link href={`details/${dat.id}`}>
                  <Image src={dat.photo} className={styles.image_ratio}  width="500" height="500" layout="responsive" objectFit="contain" alt=''/>
                </Link>
                <div className={styles.blog_content_overlay}>
                    <Link href={`categories/${dat.category.id}`}><span>{dat.category.categoryname}</span></Link>
                    <Link href={`details/${dat.id}`}><h3>{dat.title}</h3></Link>
                    <div className={styles.grid__papar}>
                      <p>{dat.user?.name}</p>
                      <div className={styles.doc__grid}></div>
                      <p>{format(dat.createdAt)}</p>
                    </div>
                </div>
            </div>
            )
          })
        }
    </section>
    <div className={styles.popular__wrapper}>
      <div className={styles.popular__nav}>
        <h1>POPULAR</h1>
      
      </div>
      <div className={styles.popular__outline}></div>
    </div>
    <div>
    <div className={styles.flex__container}>
        {
            posts?.results?.map((item, i) => {
                return (
                    <div className={styles.flex__card} key={i}>
                        <Link href={`details/${item.id}`} className={styles.link_popular}><Image src={item.photo} width={1000} height={1000} alt=''/></Link>
                        <p>0{i + 1}</p>
                        <Link href={`details/${item.id}`}><p>{item.title}</p></Link>
                    </div>
                )
            })
        }
    </div>
    </div>
    <div className={styles.popular__wrapper}>
      <div className={styles.popular__nav}>
        <h1>GADGETS</h1>
        <div className={styles.button__group}>
          {
            categories?.results?.slice(7, 10).map((item, i) => {
              return (
                <div key={i}>
                  <button onClick={() => gadgetChecked(item.id)}>{item.categoryname}</button>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={styles.popular__outline}></div>
    </div>
    <div>
      <NatureSwiper categoriesPosts={categoriesPosts}/>
    </div>
    <div className={styles.latest__container}>
      <div className={styles.late__small}>
        <div className={styles.popular__wrapper}>
          <div className={styles.popular__nav}>
            <h1>LATEST</h1>
            <div className={styles.button__group}>
              {featureLatesDatas.map((item, i) => {
                return (
                  <div key={i}>
                    <button onClick={() => lastestChecked(i)}>{item.icon}</button>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles.popular__outline}></div>
        </div>
        <div>
          {
            featureLatesDatas[latest].element
          }
        </div>
      </div>
      <div className={styles.right__late}>
        <RightLatest/>
      </div>
    </div>
    </>
  )
}

export const getServerSideProps = async () => {

  const postResults = await (await axios.get(`http://localhost:5000/v1/posts/public/latest_posts/`)).data;



  return {
      props: {
          postres : postResults.results,
      },
  }
};

export default Featured