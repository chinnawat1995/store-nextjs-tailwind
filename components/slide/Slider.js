import { Swiper } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, Scrollbar } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

SwiperCore.use([Pagination, Navigation, Scrollbar])

const Slider = ({
  children,
  slidesPerView= 1,
  pagination = true,
  navigation = true,
  scrollbar = false,
  loop = false
}) => {
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        loop={loop}
        pagination={
          pagination && {
            type: 'progressbar'
          }
        }
        scrollbar={
          scrollbar && {
            hide: true
          }
        }>
        {children}
      </Swiper>
    </>
  )
}

export default Slider
