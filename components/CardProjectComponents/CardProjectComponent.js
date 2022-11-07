import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  CardImg,
  CardProjectLeft,
  CardProjectRight,
  CardProjectWrapper,
  ContentCard,
} from './CardProjectComponentStyled';

const CardProjectComponent = (props) => {
  const { item, width } = props;
  const [hide, setHide] = useState(false);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  useEffect(() => {
    if (item.desc && item.desc.length > 179) {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [item.desc]);
  return (
    <CardProjectWrapper>
      <CardProjectLeft>
        <ContentCard>
          <div className='title'>{item.title}</div>

          <span style={{ wordWrap: 'break-word' }}>
            {width <= 991 && isReadMore ? item.desc.slice(0, 140) : item.desc}
          </span>
          {width <= 991 && (
            <span
              style={{
                display: hide ? 'inline' : 'none',
                color: '#25038C',
                textDecoration: '',
              }}
              onClick={toggleReadMore}
            >
              {isReadMore ? '... Xem thêm' : ' Ẩn bớt'}
            </span>
          )}

          {/* <div className="desc">{item.desc}</div> */}
        </ContentCard>
      </CardProjectLeft>
      <CardProjectRight>
        <CardImg>
          <Image src={item.image} alt='' />
        </CardImg>
      </CardProjectRight>
    </CardProjectWrapper>
  );
};

export default CardProjectComponent;
