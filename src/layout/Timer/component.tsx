import { useState } from 'react'
import { Props } from './types';
import Clock, { fromNumberToClockValue } from '../../component/Clock';
import Header from '../../component/Header'
import { useTimerLayoutEffect } from './useTimerLayoutEffect';

function TimerLatout( { isActivated }: Props ) {
    const startTime = useState< number | null >( null );
    const [ isActive, timeLeft ] = useTimerLayoutEffect( { isActivated, } );

    return (
        <section>
            <Header
                id="timer_header"
                level={ 2 }
                text='Just start type or click on the timer to chage the test time'
                aria-disabled={ !isActive }
            />
            <span role="timer" >
                <Clock { ...fromNumberToClockValue( timeLeft ) } isActive={ isActive } />
            </span>
        </section>
    )
}

export default TimerLatout
