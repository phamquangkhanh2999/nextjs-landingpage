import styled from 'styled-components';
export const TeamWrapper = styled.div`
  background: #f3f3f3;
  min-height: 1080px;
  padding-bottom: 30px;
  @media screen and (max-width: 480px) {
    padding-bottom: 40px;
  }
`;
export const TeamContent = styled.div`
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 991px) {}
`;
export const ProfileStyled = styled.div`
  background: #ffffff;
  box-shadow: 4px 0px 4px rgba(193, 193, 193, 0.75),
    0px 4px 4px rgba(193, 193, 193, 0.75);
  border-radius: 8px;
  width: 352px;
  height: 406px;
  text-align: center;
  @media screen and (max-width: 1280px) {
    padding-top: 30px;
    max-width: 300px;
    height: 340px;
    width: 100%;
  }
  @media screen and (max-width: 991px) {
    max-width: 300px;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    padding-top: 25px;
    height: 330px;
    width: 100%;
    max-width: inherit;
  }
/* 
  &:nth-child(4) {
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
    @media screen and (max-width: 768px) {
      margin: 0;
    }
  } */
  .profile-avatar {
    padding-top: 45px;
    padding-bottom: 20px;
    @media screen and (max-width: 480px) {
      padding-top: 25px;
    }
    img {
      border-radius: 50%;
    }
  }
  .profile-name {
    font-weight: 700;
    font-size: 24px;
    line-height: 161.52%;
    letter-spacing: 0.015em;
    color: #000000;
  }
  .profile-position {
    font-weight: 400;
    font-size: 16px;
    line-height: 161.52%;
    letter-spacing: 0.015em;
    color: #000d2f;
  }
`;
