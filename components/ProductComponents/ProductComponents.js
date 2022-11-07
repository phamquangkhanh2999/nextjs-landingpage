import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Container,
  TitleStyled,
  TitleWrapper,
} from '../../styles/Common.style';
import {
  ProductWrapper,
  SliderItem,
  SliderLeft,
  SliderRight,
  SliderStyle,
} from './ProductComponentStyled';
import Gia_Pha from '../../assets/img/GiaPha.png';
import Life_Story from '../../assets/img/LifeStory1.png';
import Google_Play from '../../assets/img/google_play.png';
import App_Store from '../../assets/img/app_store.png';
const ProductComponents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 300,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 300,
        },
      },
    ],
  };
  return (
    <ProductWrapper id='products'>
      <TitleWrapper>
        <TitleStyled>Sản phẩm</TitleStyled>
      </TitleWrapper>
      <Container>
        <SliderStyle>
          <Slider {...settings}>
            <SliderItem>
              <SliderLeft>
                <div className='img-test'>
                  <img src={Gia_Pha.src} alt='Gia Pha' />
                </div>
              </SliderLeft>
              <SliderRight>
                <div className='title-slider'>Gia phả</div>
                <div className='desc-slider'>
                  Nền tảng miễn phí giúp gia đình và dòng họ chuyển đổi số đối
                  gia phả. Kèm theo tính năng cho phép trao đổi giữa các thành
                  viên trong dòng họ, chia sẻ ảnh, lưu trữ các sự kiện quan
                  trọng...
                </div>
                <div className='footer-slider'>
                  <p className='link-web'>Website: <a href='https://giaphaso.vn'>https://giaphaso.vn</a></p>
                </div>
              </SliderRight>
            </SliderItem>
            <SliderItem>
              <SliderLeft>
                <div className='img-test'>
                  <img src={Life_Story.src} alt='Life Story' />
                </div>
              </SliderLeft>
              <SliderRight>
                <div className='title-slider'>Life Story</div>
                <div className='desc-slider'>
                  Là nơi lưu trữ khoảnh khắc của cuộc sống thông qua hình ảnh,
                  video, slide cũng như kết bạn và trò chuyện. Chia sẻ khoảnh
                  khắc đặc biệt của cuộc sống với người thân và bạn bè. Biến
                  điện thoại thành khung ảnh số để xem mọi lúc, mọi nơi.
                </div>
                <div className='footer-slider'>
                    <div className="google-play">
                      <a href="https://play.google.com/store/apps/details?id=com.life_story_mobile">
                        <img src={Google_Play.src} alt=""  />
                      </a>
                    </div>
                    <div className="google-play">
                    <a href="https://play.google.com/store/apps/details?id=com.life_story_mobile">
                        <img src={App_Store.src} alt=""  />
                      </a>
                    </div>
                </div>
              </SliderRight>
            </SliderItem>
          </Slider>
        </SliderStyle>
      </Container>
    </ProductWrapper>
  );
};

export default ProductComponents;
