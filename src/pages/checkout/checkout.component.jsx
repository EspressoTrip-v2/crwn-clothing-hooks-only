import React, { useContext } from 'react';

/* REACT ELEMENTS */
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

/* STYLED COMPONENTS */
import {
  CheckOutPageContainer,
  CheckOutHeaderContainer,
  CheckOutHeaderBlock,
  TotalContainer,
  TestWarningContainer,
  StripeCheckoutButtonStyled,
} from './checkout.styled';

/* CONTEXT COMPONENTS */
import { CartContext } from '../../providers/cart/cart.provider';

const CheckoutPage = ({ total }) => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckOutPageContainer>
      <CheckOutHeaderContainer>
        <CheckOutHeaderBlock>
          <span>Product</span>
        </CheckOutHeaderBlock>

        <CheckOutHeaderBlock>
          <span>Description</span>
        </CheckOutHeaderBlock>

        <CheckOutHeaderBlock>
          <span>Quantity</span>
        </CheckOutHeaderBlock>

        <CheckOutHeaderBlock>
          <span>Price</span>
        </CheckOutHeaderBlock>

        <CheckOutHeaderBlock>
          <span>Remove</span>
        </CheckOutHeaderBlock>
      </CheckOutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>Total: ${cartTotal}</TotalContainer>
      <TestWarningContainer>
        *Please use the following credit card number for test payments*
        <br />
        5555 5555 5555 4444
      </TestWarningContainer>
      <StripeCheckoutButtonStyled price={cartTotal} />
    </CheckOutPageContainer>
  );
};

export default CheckoutPage;
