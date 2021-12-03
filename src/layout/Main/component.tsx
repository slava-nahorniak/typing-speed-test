import Header from '../../component/Header';
import { Props } from './types';

const MainLayout = ( { className }: Props ) => {
    return (
        <main
            className={ className }
        >
            <Header
                level={ 1 }
                className="main_header"
                text="Your typing speed test!"
            />
            <TestLayout />
        </main>
    )
}

export default MainLayout
