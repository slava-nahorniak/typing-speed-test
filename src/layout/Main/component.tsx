import Header from '../../component/Header';
import Test from '../Test';
import { DEFAULT_TIMER_VALUE } from '../Test/config';
import { Props } from './types';

const MainLayout = ( { className }: Props ) => {
    return (
        <main
            className={ className }
        >
            <section
                className="main_content"
            >
                <Header
                    level={ 1 }
                    className="main_header"
                    text="Test Your typing speed!"
                />
                <Test usedTimeAmount={ DEFAULT_TIMER_VALUE } />
            </section>
        </main>
    )
}

export default MainLayout
