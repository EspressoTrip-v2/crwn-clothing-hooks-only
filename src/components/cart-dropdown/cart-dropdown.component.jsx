import React, {useContext} from 'react';


/*REACT COMPONENTS*/
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component';


import {withRouter} from 'react-router-dom';

/* STYLED COMPONENTS */
import {CartDropDownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles';

/* CONTEXT COMPONENTS */
import {CartContext} from '../../providers/cart/cart.provider';


const CartDropdown = ({history})=>{
    const {toggleHidden, cartItems} = useContext(CartContext)
    return(
    
    <CartDropDownContainer>
        <CartItemsContainer>
            {   cartItems.length ?
                cartItems.map((item)=><CartItem key={item.id} item={item}/>)
                : ( <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)  
            }
            
        </CartItemsContainer>
        <CustomButton style={{marginTop: 'auto'}}  onClick={() =>{history.push('/checkout');toggleHidden() }} >GO TO CHECKOUT</CustomButton>
    </CartDropDownContainer>
    
)}


export default withRouter(CartDropdown);