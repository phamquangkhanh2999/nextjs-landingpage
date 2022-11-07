import styled from 'styled-components';
export const CardProjectWrapper = styled.div`
  background: #ffffff;
  box-shadow: 4px 0px 4px rgba(193, 193, 193, 0.75),
    0px 4px 4px rgba(193, 193, 193, 0.75);
  border-radius: 8px;
  display: flex;
  padding: 24px;
  gap: 24px;
  margin-bottom: 24px;
  min-height: 250px;
  @media screen and (max-width: 768px) {
    height: 100%;
    /* max-height: 300px; */
  }
  @media screen and (max-width: 480px) {
    width: auto;
    flex-direction: column-reverse;
    padding: 10px 10px 20px;
    gap: 5px;
  }
  &:nth-child(even) {
    flex-direction: row-reverse;
    @media screen and (max-width: 480px) {
    
    flex-direction: column-reverse;
  }
  }
`;
export const CardProjectLeft = styled.div`
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 480px) {
    width: auto;
    }
`;
export const CardProjectRight = styled.div`
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 480px) {
    width: auto;
    }
`;
export const ContentCard = styled.div`
  /* padding-left: 30px; */
  .title {
    font-weight: 700;
    font-size: 20px;
    line-height: 161.52%;
    letter-spacing: 0.015em;
    color: #14142b;
    margin-top: 10px;
    @media screen and (max-width: 991px) {
      font-size: 18px;
      ine-height: 140%;
    letter-spacing: 0.010em;
    }
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
  .desc {
    font-weight: 400;
    font-size: 14px;
    line-height: 161.52%;
    letter-spacing: 0.015em;
    color: #14142b;
    margin-top: 12px;
  }
`;
export const CardImg = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
