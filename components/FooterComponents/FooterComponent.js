import React from 'react';
import {
  FooterContent,
  FooterItem,
  FooterItems,
  FooterTheLast,
  FooterTitle,
  FooterWrapper,
  ImageFooter,
  NavLinkFooter,
} from './FooterComponentStyled';
import Logo_Footer from '../../assets/img/Logo_footer.png';
import Icon_Fb from '../../assets/img/icon_fb.png';
import Icon_Gmail from '../../assets/img/icon_gmail.png';
import Icon_Call from '../../assets/img/ic_call.png';
import Icon_Location from '../../assets/img/location_on.png';
import { Container } from '../../styles/Common.style';

const FooterComponent = () => {
  return (
    <FooterWrapper id='aboutUs'>
      <Container>
        <FooterItems>
          <FooterItem>
            <FooterTitle>
              <ImageFooter>
                <img src={Logo_Footer.src} alt='Logo Footer' />
              </ImageFooter>
            </FooterTitle>
            <FooterContent>
              <ul>
                <li>
                  Động lực để chúng tôi phát triển đó là thử thách và tạo ra
                  những thành quả đột phá trong tương lai
                </li>
                <li>
                  <a href='mailto:info@dpotech.vn'>
                    <img
                      className='icon-gm'
                      src={Icon_Gmail.src}
                      alt='gmail'
                      width={48}
                      height={48}
                    />
                  </a>
                  <a href='https://www.facebook.com/DpoTech.vn'>
                    <img
                      className='icon-fb'
                      src={Icon_Fb.src}
                      alt='facebook'
                      width={48}
                      height={48}
                    />
                  </a>
                </li>
              </ul>
            </FooterContent>
          </FooterItem>
          <FooterItem>
            <FooterTitle>Liên hệ</FooterTitle>
            <FooterContent>
              <ul>
                <li className='contact'>
                  <img
                    className='icon-gm'
                    src={Icon_Location.src}
                    alt='Location'
                    width={24}
                    height={24}
                  />
                  Tòa nhà 17T9 Hoàng Đạo Thúy, Thanh Xuân, Hà Nội
                </li>
                <li className='contact'>
                  <img
                    className='icon-gm'
                    src={Icon_Call.src}
                    alt='Call'
                    width={24}
                    height={24}
                  />
                  <span className='underlined'>
                    <a className='link' href='tel:+0968408466'>
                      0968408466
                    </a>
                  </span>
                </li>
                <li className='contact'>
                  <img
                    className='icon-gm'
                    src={Icon_Gmail.src}
                    alt='Gmail'
                    width={24}
                    height={24}
                  />

                  <span className='underlined'>
                    <a className='link' href='mailto:info@dpotech.vn'>
                      info@dpotech.vn
                    </a>
                  </span>
                </li>
              </ul>
            </FooterContent>
          </FooterItem>
          <FooterItem>
            <FooterTitle>Menu</FooterTitle>
            <FooterContent>
              <ul>
                <li className='menu-item'>
                  <p>
                    <NavLinkFooter to='home' spy={true} smooth={true}>
                      Trang chủ
                    </NavLinkFooter>
                  </p>
                  <p>
                    <NavLinkFooter to='projects' spy={true} smooth={true}>
                      Dự án
                    </NavLinkFooter>
                  </p>
                </li>
                <li className='menu-item'>
                  <p>
                    <NavLinkFooter to='aboutUs' spy={true} smooth={true}>
                      Về chúng tôi
                    </NavLinkFooter>
                  </p>
                  <p>
                    <NavLinkFooter to='teams' spy={true} smooth={true}>
                      Đội ngũ
                    </NavLinkFooter>
                  </p>
                </li>
                <li className='menu-item'>
                  <p>
                    <NavLinkFooter to='services' spy={true} smooth={true}>
                      Dịch vụ
                    </NavLinkFooter>
                  </p>
                  <p>
                    <NavLinkFooter to='partners' spy={true} smooth={true}>
                      Đối tác
                    </NavLinkFooter>
                  </p>
                </li>
                <li className='menu-item'>
                  <NavLinkFooter to='products' spy={true} smooth={true}>
                    Sản phẩm
                  </NavLinkFooter>
                </li>
              </ul>
            </FooterContent>
          </FooterItem>
        </FooterItems>
        <hr />
        <FooterTheLast>
          2021 All rights reserved by <b>DpoTech</b>
        </FooterTheLast>
      </Container>
    </FooterWrapper>
  );
};

export default FooterComponent;
