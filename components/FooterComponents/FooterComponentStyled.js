import styled from 'styled-components';
import { Link } from 'react-scroll';

export const FooterWrapper = styled.div`
  background-color: var(--BackGroundFooter);
  padding-top: 60px;
  padding-bottom: 60px;
`;
export const FooterItems = styled.div`
  color: var(--White);
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;
export const FooterItem = styled.div`
  &:nth-child(1) {
    flex-basis: 320px;
  }
  &:nth-child(3) {
    flex-basis: 220px;
  }
`;

export const ImageFooter = styled.div`
  max-width: 163px;
  max-height: 48px;
  img {
    width: 100%;
  }
`;
export const FooterTitle = styled.div`
  /* padding-bottom: 20px; */
  height: 60px;
  font-size: 24px;
  line-height: 32px;
  color: var(--White);
`;
export const FooterContent = styled.div`
  p {
    line-height: 25.84px;
  }
  ul > li {
    padding-bottom: 24px;
    cursor: pointer;
    line-height: 25.84px;
    a {
      margin-left: 20px;
    }
  }
  .contact {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .underlined {
    text-decoration: underline;
    color: var(--White);
    .link {
      color: var(--White);
      font-weight: 400;
      margin: 0;
    }
  }
  .menu-item {
    display: flex;
    justify-items: center;
    p {
      flex: 1;
    }
  }
`;

export const FooterTheLast = styled.p`
  text-align: center;
  margin-top: 24px;
  color: var(--White);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Inter';
  font-style: normal;
`;
export const NavLinkFooter = styled(Link)`
  margin: 0 !important;
`;
