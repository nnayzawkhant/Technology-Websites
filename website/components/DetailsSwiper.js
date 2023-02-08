import React from 'react';
import styles from '../styles/DetailsSwiper.module.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { detailsSwiperDatas } from '../pages/detailsSwiperDatas';

const DetailsSwiper = () => {
  return (
        <div>
          <Swiper className={styles.swiper__wrapper}
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
            {detailsSwiperDatas.map((item, i) => {
                return (
                        <SwiperSlide className={styles.single__swiper} key={i}>
                            <img src={item.image} alt=''/>
                            <a href='#'>{item.info}</a>
                        </SwiperSlide>
                )
            })}
        </Swiper>
        </div>
  )
}

export default DetailsSwiper