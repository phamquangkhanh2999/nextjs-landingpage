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
import { SliderList } from '../../utils/data';
import Image from 'next/image';
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
        breakpoint: 768,
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
            {SliderList.map((item, index) => (
              <SliderItem key={index}>
                <SliderLeft>
                  <div className='img-test'>
                    <Image src={item.image} alt='Gia Pha' />
                  </div>
                </SliderLeft>
                <SliderRight>
                  <div className='title-slider'>{item.title}</div>
                  <div className='desc-slider'>{item.desc}</div>
                  <div className='footer-slider'>
                    {item.type === 'web' ? (
                      <p className='link-web'>
                        Website:
                        <a href={item.link_web}>{item.link_web}</a>
                      </p>
                    ) : (
                      <>
                        <div className='google-play'>
                          <a href={item.link_web}>
                            <img src={Google_Play.src} alt='' />
                          </a>
                        </div>
                        <div className='google-play'>
                          <a href={item.link_web}>
                            <img src={App_Store.src} alt='' />
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </SliderRight>
              </SliderItem>
            ))}
          </Slider>
        </SliderStyle>
      </Container>
    </ProductWrapper>
  );
};

export default ProductComponents;
