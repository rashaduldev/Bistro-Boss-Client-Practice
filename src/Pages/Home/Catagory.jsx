import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";

const Catagory = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-28">Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-28">Pizza </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-28">Soup</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-28">Salad</h2>
        </SwiperSlide>
        <SwiperSlide >
          <img src={img5} alt="" />
          <h2 className="text-4xl uppercase text-center -mt-16">Salad</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Catagory;
