import React, {useContext} from 'react';

/* REACT COMPONENTS */
import CollectionPreview from '../collection-preview/collection-preview.component';

/* STYLED COMPONENTS */
import {CollectionsOverviewContainer} from './collections-overview.styles';

import CollectionsContext from '../../context/collections/collections.context';

const CollectionsOverview = ()=>{
    /* GET CONTEXT AND CREATE PRODUCT ARRAY */
    const collectionsObj = useContext(CollectionsContext);
    const collections = Object.keys(collectionsObj).map(key => collectionsObj[key])
    
    return(
    <CollectionsOverviewContainer>
        { 
            collections.map(({id,...otherCollectionProps})=>( 
                <CollectionPreview key={id} {...otherCollectionProps}/> 
            ))
        }
    </CollectionsOverviewContainer>
    
)}


export default CollectionsOverview;