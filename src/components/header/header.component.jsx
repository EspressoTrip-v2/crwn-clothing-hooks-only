import React, { useContext } from 'react';

/* REACT COMPONENTS */
import { ReactComponent as Logo } from '../../assets//crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

/* FIREBASE */
import { auth } from '../../firebase/firebase.utils';

/* STYLED COMPONENTS */
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

import CurrentUserContext from '../../context/current-user/current-user.context';
import { CartContext } from '../../providers/cart/cart.provider';

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden, clearItemsFromCart } = useContext(CartContext);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>

        <OptionLink to="/shop">Contact</OptionLink>

        {currentUser ? (
          <OptionLink
            as="div"
            onClick={() => {
              auth.signOut();
              clearItemsFromCart();
            }}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}

        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
