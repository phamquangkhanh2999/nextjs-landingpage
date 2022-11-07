import styled from 'styled-components';
export const ServicesWrapper = styled.div`
  position: relative;
  min-height: 1080px;
  padding-bottom: 20px;
  background-color: var(--White);
  /* background-image: linear-gradient(348deg,  rgba(4, 51, 173, 0.25) 25%, transparent 24%); */
  @media screen and (max-width: 1280px) {
    min-height: auto;
    padding-bottom: 50px;
  }

  .polygon-right {
    width: 0px;
    height: 0px;
    border-bottom: 110px solid transparent;
    border-top: 110px solid transparent;
    border-left: 140px solid rgba(4, 51, 173, 0.5);
    position: absolute;
    left: 0;
    @media screen and (max-width: 991px) {
      display: none;
    }
  }
  .polygon-left {
    width: 0px;
    height: 0px;
    border-bottom: 110px solid transparent;
    border-top: 110px solid transparent;
    border-right: 140px solid #0433ad;
    position: absolute;
    right: 0;
    top: 10%;
    opacity: 0.8;
    /* @media screen and (max-width: 991px) {
      opacity: 0.3;
      z-index: 444;
    } */
    @media screen and (max-width: 991px) {
      display: none;
    }
  }
`;

export const ContentServices = styled.div`
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  align-items: center;
  justify-content: space-evenly;
  /* display: grid; */
  @media screen and (max-width: 1280px) {
    row-gap: 40px;
    column-gap: 20px;
  }
`;
export const BannerImage = styled.div`
  position: absolute;
  bottom: -3px;
  right: 0;
  z-index: 1;
  max-width: 100%;
  width: 100%;
  img {
    max-width: 100%;
    width: 100%;
  }
`;
