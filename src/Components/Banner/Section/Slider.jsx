import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import sliders from '../../../../public/slider.json';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './Slider.css'

const Slider = () => {
    return (
        <div>
             <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    
    >
        {sliders.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} className='slider-image' alt={slide.title}/>
          <div className='slider-title'>
          <h1 >{slide.title}</h1>
          <p>{slide.subTitle}</p>
          </div>
        </SwiperSlide>
      ))}
      
      ...
    </Swiper>
        </div>
    );
};

export default Slider;