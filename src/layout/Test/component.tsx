import Button from '../../component/Button';
import Header from '../../component/Header';
import { TEXT_TO_BE_TYPED } from '../../const';
import Timer, { Props as TimerProps } from '../Timer';
import { Props } from './types';
import TextInput from '../../component/TextInput';
import { KeyboardEventHandler, useCallback, useState } from 'react';

const wordsArray = TEXT_TO_BE_TYPED.split( ' ' );

const TestLayout = ( { usedTimeAmount }: Props ) => {
    const testHeaderId = 'test_header';
    const [ isTimerActive, setIsTimerActive ] = useState< TimerProps[ "isActivated" ] >( false );

    const handleKeyDown = useCallback< KeyboardEventHandler >( event => {
        const key = event.key;
        const isHandableKey = key !== 'Escape' && key !== 'Backspace';

        if ( !isTimerActive && isHandableKey ) {
            setIsTimerActive( true );
        };
    }, [ isTimerActive ] );

    const handleOnTimer = useCallback( () => {
        setIsTimerActive( false );
    }, [] );

    return (
        <>
            <section className="test_input-interface" >
                <Header
                    id={ testHeaderId }
                    level={ 2 }
                    text="Just start type to test your speed!"
                />
                <TextInput
                    words={ wordsArray }
                    aria-labelledby={ testHeaderId }
                    onKeyDown={ handleKeyDown } 
                />
            </section>
            <section className="test_timer-container" >
                <Timer isActivated={ isTimerActive } onTimer={ handleOnTimer } timeAmount={ usedTimeAmount } />
                <Button
                    id="button_open-edit-time-drawer"
                />
            </section>
        </>
    )
};

export default TestLayout;