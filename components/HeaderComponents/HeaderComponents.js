import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Container } from '../../styles/Common.style';
import {
  HeaderStyle,
  HeaderWrapper,
  LogoWrapper,
  MobileIcon,
  NavLinks,
  UlStyle,
} from './HeaderComponentStyled';
import Logo from '../../assets/img/Logo.png';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import SideBarComponents from './SideBarComponents';

const HeaderComponents = () => {
  const [checkToggle, setCheckToggle] = useState(false);
  return (
    <HeaderWrapper>
      <Container>
        <HeaderStyle>
          <LogoWrapper>
            <img src={Logo.src} alt='logo' />
          </LogoWrapper>
          <UlStyle>
            <li>
              <NavLinks activeClass='active' to='home' spy={true} smooth={true} duration={500} >
                Trang chủ
              </NavLinks>
            </li>
            <li>
              <NavLinks to='aboutUs' spy={true} smooth={true} duration={500} >
                Về chúng tôi
              </NavLinks>
            </li>
            <li>
              <NavLinks to='services' spy={true} smooth={true} duration={500} >
                Dịch vụ
              </NavLinks>
            </li>
            <li>
              <NavLinks to='products' spy={true} smooth={true} duration={500} >
                Sản phẩm
              </NavLinks>
            </li>
            <li>
              <NavLinks to='projects' spy={true} smooth={true} duration={500}>
                Dự án
              </NavLinks>
            </li>
            <li>
              <NavLinks to='teams' spy={true} smooth={true} duration={500}>
                Đội ngũ
              </NavLinks>
            </li>
            <li>
              <NavLinks to='partners' spy={true} smooth={true} duration={500}>
                Đối tác
              </NavLinks>
            </li>
          </UlStyle>
          <MobileIcon>
            {!checkToggle ? (
              <FaBars
                className='icon-FaBars'
                onClick={() => setCheckToggle(!checkToggle)}
              />
            ) : (
              <AiOutlineClose
                className='icon-FaBars'
                onClick={() => setCheckToggle(!checkToggle)}
              />
            )}
          </MobileIcon>
        </HeaderStyle>
      </Container>
      <SideBarComponents
        checkToggle={checkToggle}
        setCheckToggle={(e) => {
          setCheckToggle(e);
        }}
      />
    </HeaderWrapper>
  );
};

export default HeaderComponents;
