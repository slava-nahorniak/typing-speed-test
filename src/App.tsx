import React, { createContext, ReactElement, useCallback, useMemo } from 'react';
import classes from './App.css';
import Drawer from './Layout/Drawer';
import Main from './Layout/Main';
import { drawerContext } from './context/Drawer';

export const DrawerContext = createContext( drawerService );

const App = () => {
    const { children, isVisible, isClosable } = drawerContext;

    let onCloseDrawerClick = useCallback( () => {
            
    }, [  ] );

    return (
        <DrawerContext.Provider value={ drawerContext } >
            <Main className="app-page_main-content" />
            { drawerContext.isVisible && <Drawer
                className="app-page_drawer"
                title={ drawerContext.title }
                onCloseClick={}
            >
                { children }
            </Drawer> }
        </DrawerContext.Provider>
    );
}

export default App;
