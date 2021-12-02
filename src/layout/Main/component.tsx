import React from 'react';
import Clock from '../../component/Clock';
import Header from '../../component/Header';
import DrawerLayout from '../Drawer';

interface Props {
    
}

const MainLayout = ( {}: Props) => {
    return (
        <main
            className="app-page"
        >
            <Header
                level={ 1 }
                className="app-page_header"
                text="Your typing speed test!"
            />
            <TestLayout />
        </main>
    )
}

export default MainLayout
