import React, { useState } from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SideBarLink,
  SidebarMenu,
  SidebarWrapper,
  UlStyle,
} from './HeaderComponentStyled';

const SideBarComponents = (props) => {
  const { checkToggle, setCheckToggle } = props;
  return (
    <div className={checkToggle ? 'main-nav is-open' : 'main-nav'}>
      <SidebarWrapper>
        <SidebarMenu>
          <li>
            <SideBarLink
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              onClick={() => setCheckToggle(false)}
            >
              Trang chủ
            </SideBarLink>
          </li>
          <li>
            <SideBarLink
              to='aboutUs'
              spy={true}
              smooth={true}
              onClick={() => setCheckToggle(false)}
            >
              Về chúng tôi
            </SideBarLink>
          </li>
          <li>
            <SideBarLink
              to='services'
              spy={true}
              smooth={true}
              onClick={() => setCheckToggle(false)}
            >
              Dịch vụ
            </SideBarLink>
          </li>
          <li>
            <SideBarLink
              to='products'
              spy={true}
              smooth={true}
              onClick={() => setCheckToggle(false)}
            >
              Sản phẩm
            </SideBarLink>
          </li>
          <li>
            <SideBarLink
              to='projects'
              spy={true}
              smooth={true}
              onClick={() => setCheckToggle(false)}
            >
              Dự án
            </SideBarLink>
          </li>
          <li>
            <SideBarLink
              to='teams'
              spy={true}
              smooth={true}
              onClick={() => setCheckToggle(false)}
            >
              Đội ngũ
            </SideBarLink>
          </li>
          <li>
            <SideBarLink
              to='partners'
              spy={true}
              smooth={true}
              onClick={() => setCheckToggle(false)}
            >
              Đối tác
            </SideBarLink>
          </li>
        </SidebarMenu>
      </SidebarWrapper>
    </div>
  );
};

export default SideBarComponents;
