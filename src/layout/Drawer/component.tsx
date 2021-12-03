import cx from 'classnames';
import Button from '../../component/Button';
import Header from '../../component/Header';
import { Props } from './types';

const DrawerLayout = ( {
    children,
    title,
    className,
    onCloseClick,
    isClosable = true
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
