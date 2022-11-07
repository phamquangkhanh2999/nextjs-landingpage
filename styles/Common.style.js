import styled from 'styled-components';
export const Container = styled.div`
  padding: 0 10rem;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1518px) {
    padding: 0 5rem;
  }
  @media (max-width: 1280px) {
    padding: 0 5rem;
  }
  @media (max-width: 991px) {
    padding: 0 3rem;
  }
  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;
export const TitleWrapper = styled.div`
  text-align: center;
  .text-services {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.015em;
    color: #4f308d;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
`;
export const PartnerWrapper = styled.div``
export const TitleStyled = styled.h3`
  padding-top: 40px;
  font-weight: 600;
  font-size: 50px;
  line-height: 61px;
  letter-spacing: 0.015em;
  color: #4f308d;
  border-bottom: 1px solid #4f308d;
  width: 255px;
  margin: 0 auto;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 35px;
    width: 196px;
    padding-top: 10px;
  }
`;

export const PartnerStyle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 135px;
  padding-bottom: 100px;
  flex-wrap: wrap;
  @media screen and (max-width: 991px) {
    gap: 80px;
  }
  @media screen and (max-width: 480px) {
    gap: 50px;
  }
`;
