import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonials = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('reviews.json')
      .then(res=>res.json())
      .then(data=>setReviews(data))
    },[])
    return (
        <section>
            <SectionTitle subHeading={'---What Our Clients Say---'} heading={'TESTIMONIALS'}></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <div className="m-10">
      {
           reviews.map((review) => <SwiperSlide key={review.id}>
            <div>
                <p>{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
           </SwiperSlide>) 
        }
      </div>
      </Swiper>
        </section>
    );
};

export default Testimonials;