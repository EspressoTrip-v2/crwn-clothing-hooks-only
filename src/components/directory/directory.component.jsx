import React, {useContext} from 'react';

/* MENU ITEM IMPORT */
import MenuItem from '../menu-item/menu-item.component';

/* STYLED COMPONENTS */
import {DirectoryMenuContainer} from './directory.styles';

/* CONTEXT COMPONENTS */
import DirectoryContext from '../../context/directory/directory.context';


const Directory = ()=>{
const sections = useContext(DirectoryContext).sections
return(
  
  
<DirectoryMenuContainer>
    {
        /* LOOP THROUGH STATE TO CREATE MENU ITEMS */
    sections.map(({id, ...otherSectionProps}) =>(<MenuItem key={id} {...otherSectionProps} />))
    
    } 
</DirectoryMenuContainer>   

  
)}


export default Directory;