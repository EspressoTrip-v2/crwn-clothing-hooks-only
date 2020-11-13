import { createContext } from 'react';
import DIRECTORY_STATE from './directory.data';

const DirectoryContext = createContext(DIRECTORY_STATE);

export default DirectoryContext;
