import styled from 'styled-components';

export const ProductWrapper = styled.div`
  /* padding-top: 58px; */
  background: #f3f3f3;
  padding-bottom: 100px;
  /* min-height: 1080px; */
  @media screen and (max-width: 767px) {
    height: auto;
    padding-bottom: 0;
  }
  .slick-prev {
    left: -70px;
  }
  .slick-dots {
    /* bottom: 10px; */
    bottom: -72px;

    @media screen and (max-width: 480px) {
      bottom: -1px;
    }
  }
  .slick-dots li button:before {
    font-size: 15px;
  }
  .slick-next {
    right: 0px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 50px;
    color: #ffffff;
    @media screen and (max-width: 991px) {
      font-size: 0;
    }
  }
`;

export const SliderStyle = styled.div`
  margin-top: 68px;
  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }
`;

export const SliderItem = styled.div`
  /* display: flex !important; */
  /* gap: 18%; */
  display: grid !important;
  grid-template-columns: 0.79fr auto;
  column-gap: 55px;
  @media screen and (max-width: 1280px) {
    column-gap: 55px;
  }
  @media screen and (max-width: 991px) {
    gap: 20px;
  }
  @media screen and (max-width: 767px) {
    display: flex !important;
    gap: 20px;
    width: auto;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    padding-bottom: 35px;
  }
`;

export const SliderLeft = styled.div`
  .img-test {
    /* width: 370px;
    height: 780px; */
    width: 420px;
    height: 611.04px;
    @media screen and (max-width: 1280px) {
      width: 370px;
    }
    @media screen and (max-width: 991px) {
      width: 320px;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      /* height: 379.719px; */
      height: auto;
      text-align: center;
    }
  }

  img {
    width: 100%;
    border-radius: 4px;
    height: 100%;
  }
`;
export const SliderRight = styled.div`
  .title-slider {
    font-weight: 600;
    font-size: 42px;
    line-height: 51px;
    letter-spacing: 0.015em;
    color: #4f308d;

    @media screen and (max-width: 480px) {
      font-size: 24px;
      .google-play {
        width: 135px;
      }
    }
  }
  .desc-slider {
    font-weight: 400;
    font-size: 20px;
    line-height: 161.52%;
    letter-spacing: 0.015em;
    max-width: 752px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }

  .footer-slider {
    margin-top: 24px;
    font-size: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      padding-bottom: 0;
      .link-web {
        padding-bottom: 51px;
      }
      .google-play {
        max-width: 120px;

        img {
          width: 100%;
        }
      }
    }
    a {
      color: #4f308d;
      text-decoration: revert;
    }
  }
`;
