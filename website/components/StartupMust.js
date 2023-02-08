import React from 'react';
import styles from '../styles/StartupMust.module.css';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { startupMustDatas } from '../pages/mustReadDatas';

const StartupMust = () => {
  return (
    <Swiper className={styles.google__swiper}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
        {
            startupMustDatas.map((item, i) => {
                return (
                    <SwiperSlide className={styles.googlemust__container} key={i}>
                        <a href='#'>
                            <img src={item.image}/>
                        </a>
                        <div className={styles.google__main}>
                            <a href='#'><h3>{item.desc}</h3></a>
                            <div className={styles.google__rain}>
                                <div className={styles.google__profile}>
                                    {item.personicon}
                                    <span>{item.name}</span>
                                </div>
                                <div className={styles.google__time}>
                                    {item.timeicon}
                                    <span>{item.time}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
  )
}

export default StartupMust