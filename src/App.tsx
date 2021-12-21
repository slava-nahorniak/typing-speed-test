import { createContext, useCallback } from 'react';
import Drawer, { Props as DrawerProps } from './Layout/Drawer';
import Main from './Layout/Main';
import { default as drawerService } from './context/Drawer';

export const DrawerContext = createContext( drawerService );

const App = () => {
    const onCloseDrawerClick = useCallback( () => {
        if ( drawerService.isClosable ) {
            drawerService.isVisible = false;
        };
    }, [] );
    
    const drawerProps: DrawerProps = {
        className: 'app-page_drawer',
        title: drawerService.title || '',
        children: drawerService.children,
        onCloseClick: onCloseDrawerClick
    };

    return (
        <DrawerContext.Provider value={ drawerService } >
            <Main className="app-page_main-content" />
            { drawerService.isVisible && <Drawer { ...drawerProps } /> }
        </DrawerContext.Provider>
    );
}

export default App;
