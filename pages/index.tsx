import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type SwiperClass from 'swiper/types/swiper-class';
import 'swiper/css';
import styles from '../styles/Home.module.scss';
import data from '../data/index';

const Home: NextPage = () => {
  const [swiper, setSwiper] = useState<SwiperClass>();

  return (
    <div className={styles.container}>
      <Head>
        <title>Zoocasa Frontend Coding Test</title>
        <meta name="description" content="The Zoocasa frontend engineer coding test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Swiper
          onSwiper={setSwiper}
          slidesPerView={'auto'}
          spaceBetween={30}
          initialSlide={0}
          centerInsufficientSlides={true}>
            {data.map((item, index) => (
              <SwiperSlide className={styles.card} key={index}>
                <Image src={item.coverImage}
                  alt="Project"
                  fill
                  style={{ objectFit: "cover" }} />
              </SwiperSlide>
            ))}
        </Swiper>
      </main>
    </div>
  )
}

export default Home
