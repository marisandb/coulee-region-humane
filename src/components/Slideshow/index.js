import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// import images
import flower from '../../assets/wildlife/flowerSkunk.jpg';
import barnOwls from '../../assets/wildlife/barnOwls.jpg';
import eagle from '../../assets/wildlife/eagle.jpg';
import flyingSquirrel from '../../assets/wildlife/flyingSquirrel.jpg';
import greatHornedOwl from '../../assets/wildlife/greatHornedOwl.jpg';
import opossums from '../../assets/wildlife/opossums.jpg';
import owl from '../../assets/wildlife/owl.jpg';

 function Slideshow() {
  return (
    <>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={flower} alt="Flower the educational skunk" /></SwiperSlide>
        <SwiperSlide><img src={barnOwls} alt="Four young barn owls huddled together inside of a tree" /></SwiperSlide>
        <SwiperSlide><img src={eagle} alt="Juvenile eagle with mouth slighly open" /></SwiperSlide>
        <SwiperSlide><img src={flyingSquirrel} alt="A flying squireel resting a leopard print blanket" /></SwiperSlide>
        <SwiperSlide><img src={greatHornedOwl} alt="A great horned owl stares widely at the camera" /></SwiperSlide>
        <SwiperSlide><img src={opossums} alt="Four young possums gathered near their breakfast bowls" /></SwiperSlide>
        <SwiperSlide><img src={owl} alt="Great horned owl with an injured beak stares strikingly at the camera" /></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slideshow;