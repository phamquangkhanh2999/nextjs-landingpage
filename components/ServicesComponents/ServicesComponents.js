import React from 'react';
import {
  Container,
  TitleStyled,
  TitleWrapper,
} from '../../styles/Common.style';
import { cardList } from '../../utils/data';
import CardComponents from '../CardComponents/CardComponents';
import { BannerImage, ContentServices, ServicesWrapper } from './ServicesComponentStyled';
import Banner_Image from "../../assets/img/Polygon 7.png"

const ServicesComponents = () => {
  return (
    <ServicesWrapper id='services'>
      <div className='polygon-right'></div>
      <div className='polygon-left'></div>
      <Container>
        <TitleWrapper>
          <TitleStyled>Dịch vụ</TitleStyled>
          <p className='text-services'>
            DpoTech là công ty chuyên cung cấp các dịch vụ
          </p>
        </TitleWrapper>
        <ContentServices>
          {cardList.map((item, index) => (
            <CardComponents item={item} key={index} />
          ))}
        </ContentServices>
      </Container>
      <BannerImage>
        <img src={Banner_Image.src} alt="" srcset="" />
      </BannerImage>
    </ServicesWrapper>
  );
};

export default ServicesComponents;
