import React, { useContext } from 'react';

/* STYLED COMPONENTS */
import {
  CheckOutItemContainer,
  ImageContainer,
  ItemImage,
  ItemNamePrice,
  ItemValue,
  ItemQuantityContainer,
  ItemArrow,
  ItemRemoveButton,
} from './checkout-item.styles';

/* CONTEXT COMPONENTS */
import { CartContext } from '../../providers/cart/cart.provider';

const CheckoutItem = ({ cartItem }) => {
  const { addItem, removeItem, removeFromCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <ItemImage src={imageUrl} alt="item" />
      </ImageContainer>
      <ItemNamePrice>{name}</ItemNamePrice>
      <ItemQuantityContainer>
        <ItemArrow onClick={() => removeItem(cartItem)}>&#10094;</ItemArrow>
        <ItemValue>{quantity}</ItemValue>
        <ItemArrow onClick={() => addItem(cartItem)}>&#10095;</ItemArrow>
      </ItemQuantityContainer>
      <ItemNamePrice>${price}</ItemNamePrice>
      <ItemRemoveButton onClick={() => removeFromCart(cartItem)}> &#10005; </ItemRemoveButton>
    </CheckOutItemContainer>
  );
};

export default CheckoutItem;
