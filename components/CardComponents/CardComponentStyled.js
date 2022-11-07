import styled from 'styled-components';
export const CardWrapper = styled.div`
  max-width: 352px;
  height: 400px;
  background: #ffffff;
  box-shadow: 4px 0px 4px rgba(193, 193, 193, 0.75),
    0px 4px 4px rgba(193, 193, 193, 0.75);
  border-radius: 8px;
  padding-top: 16px;
  text-align: center;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  z-index: 5;

  &:hover{
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
  }
  @media screen and (max-width: 1280px) {
    padding-top: 30px;
    max-width: 300px;
    height: 340px;
    width: 100%;
  }
  /* @media screen and (max-width: 991px) {
    max-width: 300px;
    width: 100%;
  } */
  /* &:nth-child(4) {
    margin-left: 17%;
    @media screen and (max-width: 991px) {
      margin: 0;
    }
  }
  &:nth-child(5) {
    margin-right: 17%;
    @media screen and (max-width: 991px) {
      margin-left: 25%;
    }
    @media screen and (max-width: 480px) {
      margin: 0;
    }
  } */
  @media screen and (max-width: 480px) {
    height: 300px;
    max-width: inherit;
  }
`;
export const CartIcon = styled.div``;
export const CartTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 161.52%;
  text-align: center;
  letter-spacing: 0.015em;
  color: #14142b;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const CartText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 161.52%;
  text-align: center;
  letter-spacing: 0.015em;
  color: #14142b;
  padding: 0 61px 0;
  @media screen and (max-width: 1280px) {
    padding: 0 30px 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 13px;
    line-height: 150.52%;
  }
`;
