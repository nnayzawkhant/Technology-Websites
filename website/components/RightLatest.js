import React, { useState } from 'react';
import styles from '../styles/RightLatest.module.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import { mustReadDatas } from '../pages/mustReadDatas';
import GoogleMust from './GoogleMust';


const RightLatest = () => {
  const [mustread, setMustread] = useState(0);

  const handleMustChecked = (index) => {
    setMustread(index)
  }
  return (
    <div className={styles.rightlate__wrapper}>
      <img src='https://1.bp.blogspot.com/-DDHx9Lf12jg/YE859Qa6AvI/AAAAAAAAFks/hXfL-J7DXvcjsmLgdtLLKwb8GFcEo7MdACLcBGAsYHQ/s16000-rw/adso.jpg'/>
      <div className={styles.like__container}>
        <div className={styles.rightface__btn}>
          <FacebookOutlinedIcon/>
          <span>12,346 Likes</span>
        </div>
        <div className={styles.rightperset__btn}>
          <PinterestIcon/>
          <span>12,346 Likes</span>
        </div>
        <div className={styles.righttwitter__btn}>
          <TwitterIcon/>
          <span>12,346 Likes</span>
        </div>
        <div className={styles.rightIntag__btn}>
          <InstagramIcon/>
          <span>12,346 Likes</span>
        </div>
      </div>
      <div className={styles.subscribe}>
        <h2>Subscribe to Our New Stories</h2>
        <div className={styles.email__group}>
          <EmailIcon fontSize='small'/>
          <input type='email' placeholder='Email Address...'/>
        </div>
        <button className={styles.btn__card}>
          <SendIcon fontSize='small'/>
          <span>SUBMIT</span>
        </button>
      </div>
      <div className={styles.right__must}>
        <h2>MUST READ</h2>
          <div className={styles.must__title}>
            {
              mustReadDatas.map((item, i) => {
                return (
                    <ul key={i}>
                      <li onClick={() => handleMustChecked(i)}>{item.name}</li>
                    </ul>
                )
              })
            }
          </div>
      </div>
      <div>
        {
          mustReadDatas[mustread].element
        }
      </div>
    </div>
  )
}

export default RightLatest