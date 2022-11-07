import React from 'react';
import {
  Container,
  TitleStyled,
  TitleWrapper,
} from '../../styles/Common.style';
import { ProfileStyled, TeamContent, TeamWrapper } from './TeamComponentStyled';
import { ProfileList } from '../../utils/data';
import Image from 'next/image';
const TeamComponent = () => {
  return (
    <TeamWrapper id='teams'>
      <TitleWrapper>
        <TitleStyled>Đội ngũ</TitleStyled>
      </TitleWrapper>
      <Container>
        <TeamContent>
          {ProfileList.map((item, index) => (
            <ProfileStyled key={index}>
              <div className='profile-avatar'>
                <Image src={item.image} alt="profile-avatar"  />
              </div>
              <div className='profile-name'>{item.name}</div>
              <div className='profile-position'>{item.position}</div>
            </ProfileStyled>
          ))}
        </TeamContent>
      </Container>
    </TeamWrapper>
  );
};

export default TeamComponent;
