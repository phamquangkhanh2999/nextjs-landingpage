import styled from 'styled-components';
export const IntroWrapper = styled.div`
  background: linear-gradient(
    360deg,
    rgba(3, 45, 153, 0) 0.05%,
    rgba(3, 45, 153, 0.25) 16.29%,
    rgba(3, 45, 153, 0.5) 37.47%,
    rgba(3, 45, 153, 0.75) 59.75%,
    #032d99 80.56%,
    #022273 90.82%,
    #011037 107.2%
  );
  padding-bottom: 100px;
  padding-top: 100px;
  @media (max-width: 991px) {
    background: linear-gradient(
      350deg,
      rgb(3 45 153 / 30%) 0.05%,
      rgb(3 45 153 / 47%) 16.29%,
      rgb(3 45 153 / 60%) 37.47%,
      rgba(3, 45, 153, 0.75) 59.75%,
      #032d99 80.56%,
      #022273 90.82%,
      #011037 107.2%
    );
  }
`;
export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  /* gap: 20px; */
  @media screen and (max-width: 768px) {
    width: auto;
    flex-direction: column-reverse;
  }
`;
export const IntroLeft = styled.div`
  color: white;
  width: 45%;
  @media screen and (max-width: 768px) {
    width: auto;
  }
  h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 139.69%;
    letter-spacing: 0.015em;
    margin-bottom: 30px;
    @media screen and (max-width: 991px) {
      font-size: 30px;
    }
    @media screen and (max-width: 767px) {
      font-size: 28px;
    }
  }
  p {
    line-height: 160%;
    @media screen and (max-width: 991px) {
      font-size: 14px;
    }
  }
`;
export const IntroRight = styled.div`
  /* width: 656px;
  height: 715px; */
  width: 55%;
  @media screen and (max-width: 768px) {
    width: auto;
  }
  img {
    width: 100%;
  }
`;
