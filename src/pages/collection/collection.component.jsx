import React, {useContext} from 'react';

/* STYLED COMPONENTS*/
import {CollectionPageContainer, Title, ItemsContainer, CollectionItemStyled} from './collection.styles';

/* IMPORT CONTEXT COMPONENT */
import CollectionsContext from '../../context/collections/collections.context';

const CollectionPage = ({match})=>{
    const collections = useContext(CollectionsContext)
   const {title, items} = collections[match.params.collectionId];
   
   
    return(
    <CollectionPageContainer>
         <Title>{title}</Title>   
        <ItemsContainer>
           {  
           
           items.map((item)=>( 
           <CollectionItemStyled key={item.id} item={item} /> 
            
           ))
           } 
            
        </ItemsContainer>
     
    </CollectionPageContainer>
    
)}


export default CollectionPage;