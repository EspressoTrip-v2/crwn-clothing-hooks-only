import React, { useContext } from 'react';

/* STYLED COMPONENTS */
import { CartIconContainer, ItemCountContainer, ShoppingIcon } from './cart-icon.styles';

/* CONTEXT COMPONENTS */
import { CartContext } from '../../providers/cart/cart.provider';

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <CartIconContainer onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />

      <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
