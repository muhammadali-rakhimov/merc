import Customer from './Customer'
import center from '../../../../assets/testimonials/center.png'
import left from '../../../../assets/testimonials/left.png'
import right from '../../../../assets/testimonials/right.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function index() {
  return (
    <div className='container'>
      <div className="row d-flex">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Customer image={left} author={'Tfhweiopfh Rasd'} job={'Co-founder of UFEG company'} text={'Oweg my staff to grow. With this support and hard work, I was able to grow into 3 stores in less than 3 years with a plan for more on the horizon. If someone told me fivering my staff to grow. With this support and hard work, I was able to grow into 3 stores in less than 3 years with a plan for more on the horizon. If someone told me five years ago this is where I would be, I would have thought that’s impossible. Thanks for believing in me Tuffy!!'} />
          </SwiperSlide>
          <SwiperSlide>
            <Customer image={center} author={'Ali Safarov'} job={'Co-founder of ABC company'} text={'As a young 27-year-old entrepreneur who wanted to take a dream and turn it  into a reality, Tuffy took me seriously!  Starting from day one with onsite support from District Manager Scott Adams to continued training support empowering my staff to grow. With this support and hard work, I was able to grow into 3 stores in less than 3 years with a plan for more on the horizon. If someone told me five years ago this is where I would be, I would have thought that’s impossible. Thanks for believing in me Tuffy!!'} />
          </SwiperSlide>
          <SwiperSlide>
            <Customer image={right} author={'Dpojfwefojp Defpoj'} job={'Co-founder of POHJ company'} text={'Es in less than 3 years with a plan for more on the horizon. If someone told me five yeawould have thought that’s impossirs ago this is whern. If someone told me five years ago this is whern. If someone told me five years ago this is where I would be, I would have thought that’s impossible. Thanks for believing in me Tuffy!!'} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default index
