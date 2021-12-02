import React, { HTMLAttributes, PropsWithChildren } from 'react';
import cx from 'classnames';
import Button from '../../component/Button';
import Header from '../../component/Header';

export interface Props extends PropsWithChildren< Pick< HTMLAttributes< HTMLElement > , "className" > > {
    title: string
    onCloseClick: () => void
    isClosable?: boolean
};

const DrawerLayout = ( {
    children,
    title,
    className,
    onCloseClick,
    isClosable = false
}: Props ) => {
    const drawerClasses = cx( className, 'drawer' );

    return (
        <aside className={ drawerClasses } >
            <div
                className="drawer_title-container"
            >
                <Header
                    id="drawer_title"
                    level={ 2 }
                    text={ title }
                />
                <Button
                    id="drawer_close-button"
                    icon="close"
                    onClick={ onCloseClick }
                    disabled={ !isClosable }
                />
            </div>
            <section
                className="drawer_content"
            >
                { children }
            </section>
        </aside>
    )
};

export default DrawerLayout;
