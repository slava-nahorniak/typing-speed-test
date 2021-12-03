import { createContext, useMemo } from 'react';
import Drawer, { Props as DrawerProps } from './Layout/Drawer';
import Main from './Layout/Main';
import { default as drawerService } from './context/Drawer';

export const DrawerContext = createContext( drawerService );

const App = () => {
    const onCloseDrawerClick = useMemo( () => {
        return drawerService.isClosable
            ? () => {
                drawerService.isVisible = false;
            } : undefined
    }, [ drawerService.isClosable ] );
    const drawerProps = useMemo< DrawerProps >( () => ( {
        className: 'app-page_drawer',
        title: drawerService.title || '',
        children: drawerService.children,
        onCloseClick: onCloseDrawerClick
    } ), [ drawerService.title, drawerService.children, onCloseDrawerClick ] );

    return (
        <DrawerContext.Provider value={ drawerService } >
            <Main className="app-page_main-content" />
            { drawerService.isVisible && <Drawer { ...drawerProps } /> }
        </DrawerContext.Provider>
    );
}

export default App;
