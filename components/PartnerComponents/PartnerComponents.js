import React from 'react';
import { PartnerStyle, PartnerWrapper, TitleStyled, TitleWrapper } from '../../styles/Common.style';

import GAS from "../../assets/img/gas.png"
import IHQUZZ from "../../assets/img/ihquzz.png"
import Viet_Huong from "../../assets/img/logo-huong-viet-group-removeb.png"

const PartnerComponents = () => {
  return (
    <PartnerWrapper id='partners'>
      <TitleWrapper>
        <TitleStyled>Đối tác</TitleStyled>
      </TitleWrapper>
      <PartnerStyle>
        <img src={Viet_Huong.src} alt="" />
        <img src={IHQUZZ.src} alt="" />
        <img src={GAS.src} alt=""   />
      </PartnerStyle>
    </PartnerWrapper>
  );
};

export default PartnerComponents;
