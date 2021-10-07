import { SwiperSlide } from 'swiper/react'
import Slider from '@/components/slide/Slider'

const HeaderBanner = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-4 gap-4 max-h-596px">
      <div className="overflow-hidden max-h-80 relative flex justify-center items-center">
        <a className="absolute p-10 bg-white border border-gray-500 ring-8 ring-white ring-opacity-70 cursor-pointer">
          <h1 className="font-bold">LEATHER BAG</h1>
        </a>
        <img alt="banner-3" className="header-banner-item-img cursor-pointer" src="/images/banner-3.jpg" />
      </div>
      <div className="row-span-2 col-span-2 overflow-hidden relative">
        <Slider loop={true}>
          <SwiperSlide>
            <a className="cursor-pointer">
              <img alt="banner-5" className="header-banner-item-img" src="/images/banner-5.jpg" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="cursor-pointer">
              <img alt="banner-7" className="header-banner-item-img" src="/images/banner-7.jpg" />
            </a>
          </SwiperSlide>
        </Slider>
      </div>
      <div className="row-span-2 overflow-hidden">
        <img alt="banner-4" className="header-banner-item-img cursor-pointer" src="/images/banner-4.jpg" />
      </div>
      <div className="overflow-hidden">
        <img alt="banner-6" className="header-banner-item-img cursor-pointer" src="/images/banner-6.jpg" />
      </div>
    </div>
  )
}

export default HeaderBanner
