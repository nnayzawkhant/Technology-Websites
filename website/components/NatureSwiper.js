import React, { useState } from 'react';
import styles from '../styles/NatureSwiper.module.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { natureSwiperDatas } from '../pages/natureSwiperDatas';
import axios from 'axios';

const NatureSwiper = () => {
    const [naturePosts, setNaturePosts] = useState([]);

    const fetchNature = async () => {
        const nature = await (await axios.get(''))
    }
  return (
    <>
        <Swiper className={styles.swiper__wrapper}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
        {natureSwiperDatas.map((item, i) => {
            return (
                    <SwiperSlide className={styles.single__swiper} key={i}>
                        <img src={item.image}/>
                        <a href='#'>{item.info}</a>
                        <div className={styles.swiper__icon}>
                            {item.icon}
                            <span>{item.span}</span>
                        </div>
                    </SwiperSlide>
            )
        })}
    </Swiper>
    </>
  )
}

export default NatureSwiper