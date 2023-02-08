import React, { useState } from 'react';
import styles from '../styles/Feature.module.css';
import Link from 'next/link';
import Week from './Week';
import Month from './Month';
import { popularDatas } from '../pages/popularDatas';
import { featureLatesDatas, featureSwiperDatas } from '../pages/featureSwiperDatas';
import FirstLatest from './FirstLatest';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import SecondLatest from './SecondLatest';
import RightLatest from './RightLatest';

const Featured = () => {
  const [popular, setPopular] = useState(0);

  const [gadgets, setGadgets] = useState(0);

  const [latest, setLatest] = useState(0);

  const popularChecked = (index) => {
    setPopular(index)
  }

  const gadgetChecked = (index) => {
    setGadgets(index)
  }

  const lastestChecked = (index) => {
    setLatest(index)
  }

  return (
    <>
      <div className={styles.grid__container}>
        <div className={styles.item2}>
          <a href='#'><img src='https://cdn.pixabay.com/photo/2014/11/17/20/55/girl-535251__480.jpg' alt='hello'/></a>
          <div className={styles.grid__span}>
            <a href='#'><span>FEATURED</span></a>
            <a href='#'><h2>Google To Boost Android Security In Few Days</h2></a>
            <div className={styles.grid__papar}>
              <p>by Salman</p>
              <div className={styles.doc__grid}></div>
              <p>2 years ago</p>
            </div>
          </div>
        </div>
      <div className={styles.item3}>
        <a href='#'><img src='https://cdn.pixabay.com/photo/2016/11/29/09/11/candles-1868640__480.jpg' alt='hello'/></a>
        <div className={styles.grid__span}>
          <a href='#'><span>FEATURED</span></a>
          <a href='#'><h4>Google To Boost Android Security In Few Days</h4></a>
          <div className={styles.grid__papar}>
            <p>by Salman</p>
            <div className={styles.doc__grid}></div>
            <p>2 years ago</p>
          </div>
        </div>
      </div>  
      <div className={styles.item4}>
        <a href='#'><img src='https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665__480.jpg' alt='hello'/></a>
        <div className={styles.grid__span}>
          <a href='#'><span>FEATURED</span></a>
          <a href='#'><h4>Google To Boost Android Security In Few Days</h4></a>
          <div className={styles.grid__papar}>
            <p>by Salman</p>
            <div className={styles.doc__grid}></div>
            <p>2 years ago</p>
          </div>
        </div>
      </div>
      <div className={styles.item5}>
        <a href='#'><img src='https://cdn.pixabay.com/photo/2016/05/24/18/49/suitcase-1412996__480.jpg' alt='hello'/></a>
        <div className={styles.grid__span}>
          <a href='#'><span>FEATURED</span></a>
          <a href='#'><h4>Google To Boost Android Security In Few Days</h4></a>
          <div className={styles.grid__papar}>
            <p>by Salman</p>
            <div className={styles.doc__grid}></div>
            <p>2 years ago</p>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.popular__wrapper}>
      <div className={styles.popular__nav}>
        <h1>POPULAR</h1>
        <div className={styles.button__group}>
          {
            popularDatas.map((item, i) => {
              return (
                <div key={i}>
                  <button onClick={() => popularChecked(i)}>{item.name}</button>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={styles.popular__outline}></div>
    </div>
    <div>
      {
        popularDatas[popular].element
      }
    </div>
    <div className={styles.popular__wrapper}>
      <div className={styles.popular__nav}>
        <h1>GADGETS</h1>
        <div className={styles.button__group}>
          {
            featureSwiperDatas.map((item, i) => {
              return (
                <div key={i}>
                  <button onClick={() => gadgetChecked(i)}>{item.name}</button>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={styles.popular__outline}></div>
    </div>
    <div>
      {
        featureSwiperDatas[gadgets].element
      }
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

export default Featured