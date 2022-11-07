import React from 'react';
import { Container } from '../../styles/Common.style';
import { IntroContent, IntroLeft, IntroRight, IntroWrapper } from './IntroComponentStyled';
import IntroImage from '../../assets/img/header.png';

const IntroComponents = () => {
  return (
    <IntroWrapper id='home'>
      <Container>
        <IntroContent>
          <IntroLeft>
            <h3>&#8221;Coming together is a <br />beginning, keeping <br /> together <span data-title='test' className='test'>is progress</span>.&#8222;</h3>
            <p>DPOTech – Digitalization consulting and software development là công ty chuyên cung cấp các dịch vụ phần mềm được thành lập vào tháng 3/2021. Trong xu hướng chuyển đổi số yêu cầu các doanh nghiệp cần liên tục cập nhật, thay đổi và có những giải pháp chiến lược trong kinh doanh giúp Doanh nghiệp tối ưu hoá lợi nhuận, hoàn thiện mô hình kinh doanh và tăng cường lợi thế cạnh tranh.</p>
          </IntroLeft>
          <IntroRight>
            <img src={IntroImage.src} alt     />
          </IntroRight>
        </IntroContent>
      </Container>
    </IntroWrapper>
  );
};

export default IntroComponents;
