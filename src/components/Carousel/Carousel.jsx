import { Navigation } from 'swiper';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './Carousel.module.css'
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation'
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';
import 'swiper/css';


// const Controls = ({data})=>{
//     const swiper = useSwiper(); 
//     useEffect(()=>{
//         swiper.slideTo(0);
//     },[data]);
//     return<></>
// }

export default function Carousel({data,renderComponent}){
    return(<>
    <div className={styles.wrapper}>
    <Swiper
      styles={{padding: "0px 20px"}}
      initialSlide={0}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={"auto"}
      allowTouchMove
    >
        {/* <Controls data={data}/> */}
        <CarouselLeftNavigation/>  
        <CarouselRightNavigation/>
      {data.map((ele)=>(<SwiperSlide>{renderComponent(ele)}</SwiperSlide>))}
    </Swiper>
    </div>
        
    </>)
}