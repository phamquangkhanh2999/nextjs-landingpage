import { Link } from 'react-scroll';
import styled from 'styled-components';
export const HeaderWrapper = styled.div`
  background-color: var(--BackGroundHead);
  height: auto;
  /* max-height: 100px; */
  top: 0;
  left: 0;
  position: fixed;
  z-index: 999;
  width: 100%;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 960px) {
    transition: all 0.3s 0.2s;
  }
  .main-nav {
    color: var(--White);
    display: none;
    @media screen and (max-width: 991px) {
      background-color: var(--BackGroundHead);
      box-shadow: 0 15px 15px #0000002e;
      display: block;
      left: 0;
      overflow-y: auto;
      position: fixed;
      height: 55%;
      top: 90px;
      width: 100%;
      padding: 10px 56px 0;
      opacity: 0;
      z-index: -1;
      visibility: hidden;
      transform-origin: 0 0;
      transform: skew(0) translateY(-120%);
      transition: all 0.3s 0.2s;
    }
    @media screen and (max-width: 480px){
      height: 55%;
      top: 59px;
      width: 100%;
      padding: 10px 22.2px 0;
    }
  }
  .main-nav.is-open {
    opacity: 1;
    z-index: 100;
    visibility: visible;
    transform: skew(0) translateX(0);
  }
  /* .main-nav::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -15px;
    background: var(--BackGroundHead);
    transform-origin: 0 0;
    transform: skew(-14deg) translateX(-120%);
    transition: all 0.275s 0.1s;
    z-index: 1;
  }

  .main-nav.is-open::before {
    transform: skew(-14deg) translateX(0);
  } */
`;
export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* @media screen and (max-width: 768px) {
   display: grid;
  } */
  @media screen and (max-width: 480px) {
    height: 60px;
  }
`;
export const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
  padding-top: 10px;
  @media screen and (max-width: 480px) {
    width: 75px;
    height: 75px;
    padding-top: 7px;
  }
  img {
    width: 100%;
  }
`;

export const UlStyle = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin-right: 2rem;

  li {
    color: var(--White);
    cursor: pointer;
  }

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const NavLinks = styled(Link)`
  color: var(--White);
  cursor: pointer;

  &.active {
    color: aqua;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 991px) {
    .icon-FaBars {
      font-size: 25px;
      transition: 0.8s all ease;
    }
    display: block;
    /* position: absolute;
    top: 0;
    right: 0; */
    /* transform: translate(-100%, 60%); */
    cursor: pointer;
    color: var(--White);
    /* margin-bottom: 35px; */
  }
`;

export const SidebarContainer = styled.div`
  color: var(--White);
  display: none;
  @media screen and (max-width: 768px) {
    background-color: var(--BackGroundHead);
    box-shadow: 0 15px 15px #0000002e;
    display: block;
    height: 100%;
    left: 0;
    overflow-y: auto;
    position: fixed;
    top: 0;
    width: 50%;
    z-index: 999;
    padding: 20px;

    opacity: 0;
    z-index: -1;
    visibility: hidden;
    transition: all 0.375s;
  }
`;
export const Icon = styled.div``;
export const SidebarMenu = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  flex-direction: column;
`;
export const CloseIcon = styled.div``;
export const SidebarWrapper = styled.div``;
export const SideBarLink = styled(Link)`
  color: var(--White);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;

  &:hover {
    color: aqua;
    transition: 0.2s ease-in-out;
  }
  &.active {
    color: aqua;
  }
`;
