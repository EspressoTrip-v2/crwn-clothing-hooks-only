import React, {useContext} from 'react';

/* STYLED COMPONENTS */
import {CollectionItemContainer, CollectionImageContainer, CollectionFooterContainer, CustomButtonStyled} from './collection-item.styles';

/* CONTEXT COMPONENTS */
import {CartContext} from '../../providers/cart/cart.provider';

const CollectionItem = ({item}) =>{
    const {addItem} = useContext(CartContext)
    const {imageUrl, name, price} = item;
    
    return(
    
    <CollectionItemContainer>
        <CollectionImageContainer className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
        <CollectionFooterContainer>
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </CollectionFooterContainer>
        <CustomButtonStyled onClick={()=>addItem(item)} inverted>Add to cart</CustomButtonStyled>
    </CollectionItemContainer>
)}


export default CollectionItem;