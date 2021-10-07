import Slider from '@/components/slide/Slider'
import { SwiperSlide } from 'swiper/react'

const BrandSlideContainer = () => {
  return (
    <Slider scrollbar={true} loop={false} pagination={false} slidesPerView={6}>
      <SwiperSlide>
        <div className="py-7">
          <img
            alt="brand-1"
            className="brand-slide-item-image"
            src="/images/brand/brand-1.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-7">
          <img
            alt="brand-2"
            className="brand-slide-item-image"
            src="/images/brand/brand-2.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-7">
          <img
            alt="brand-3"
            className="brand-slide-item-image"
            src="/images/brand/brand-3.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-7">
          <img
            alt="brand-4"
            className="brand-slide-item-image"
            src="/images/brand/brand-4.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-7">
          <img
            alt="brand-5"
            className="brand-slide-item-image"
            src="/images/brand/brand-5.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-7">
          <img
            alt="brand-6"
            className="brand-slide-item-image"
            src="/images/brand/brand-6.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Slider>
  )
}

export default BrandSlideContainer
