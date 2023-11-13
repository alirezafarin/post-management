import { useContext } from 'react';
import { sidebarContext } from '../contexts';

export const useSidebarContext = () => useContext(sidebarContext);
