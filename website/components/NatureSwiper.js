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
import Link from 'next/link';
import Image from 'next/image';

const NatureSwiper = ({categoriesPosts}) => {
    console.log(categoriesPosts)
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
        {categoriesPosts?.results?.map((item, i) => {
            return (
                    <SwiperSlide className={styles.single__swiper} key={i}>
                        <Link href={`details/${item.id}`} passHref>
                            <Image src={item.photo} width={500} height={500} alt=''/>
                            <span>{item.title}</span>
                        </Link>
                    </SwiperSlide>
            )
        })}
    </Swiper>
    </>
  )
}

export default NatureSwiper