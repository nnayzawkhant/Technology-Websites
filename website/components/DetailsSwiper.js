import React from 'react';
import styles from '../styles/DetailsSwiper.module.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { detailsSwiperDatas } from '../pages/detailsSwiperDatas';
import Link from 'next/link';
import Image from 'next/image';

const DetailsSwiper = ({cat}) => {
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
            {cat.map((item, i) => {
                return (
                        <SwiperSlide className={styles.single__swiper} key={i}>
                            
                            <Link href={`${item.id}`} passHref>
                              <Image src={item.photo} alt='' width={500} height={500}/>
                              <span>{item.title}</span>
                            </Link>
                        </SwiperSlide>
                )
            })}
        </Swiper>
        </div>
  )
}

export const getServerSideProps = async () => {

  const res = await (await axios.get(`http://localhost:5000/v1/posts/public/latest_posts/`)).data;


  return {
      props: {
          swipers : res.results
      },
  }
};

export default DetailsSwiper