import Image from 'next/image';
import React from 'react';
import {
  CardWrapper,
  CartIcon,
  CartText,
  CartTitle,
} from './CardComponentStyled';
const CardComponents = (props) => {
  const { item } = props;
  return (
    <CardWrapper>
      <CartIcon>
        <Image src={item.images} height={48} width={48} alt=""     />
      </CartIcon>
      <CartTitle>{item.tittle}</CartTitle>
      <CartText>
      {item.desc}
      </CartText>
    </CardWrapper>
  );
};

export default CardComponents;
