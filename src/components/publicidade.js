
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./publicidade.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function Publicidade () {
  return (
    <div className="principal">
        <div className='title'>
            <p>E aquela cervejinha, hein?</p>
        </div>
        <Swiper
            slidesPerView={1}
            freeMode={true}
            pagination={{
            clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="publi">
                    <img src='/img/promo_ze.png' alt='promo ze' className='promo'/>
                    <div className="button_cupom" >
                        <button className='button'>
                            <a href='https://www.ze.delivery/?D990db447-9f38-4760-8f6d-03fda3772cd6?utm_medium=video&gclid=Cj0KCQiAsdKbBhDHARIsANJ6-jfXZvesXqey8lDXap1RbgEXuhCd-J-mZYhadHdPGbi-pEWoH1zH9UMaAkQ_EALw_wcB'
                                className='link' target="_blank"> Pegar Cupom </a>
                        </button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <div className='logo'>
            <p className="logo_text">Mensagem oferecida por</p>
            <div className="logo_img_1">
                <img src='/img/logo_ze.png' alt='logo ze' className='logo_img'/>
            </div>
        </div>
    </div>
  );
}
