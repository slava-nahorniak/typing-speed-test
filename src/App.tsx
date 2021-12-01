import React from 'react';
import classes from './App.css';
import { DrawerContext, initialContext as drawerContext } from './layout/Drawer/Context';
import Main from './layout/Main';

function App() {
    return (
        <DrawerContext.Provider value={ drawerContext } >
            <Main />
        </DrawerContext.Provider>
    );
}

export default App;
