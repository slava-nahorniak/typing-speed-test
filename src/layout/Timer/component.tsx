import { Props } from './types';
import Clock, { fromNumberToClockValue } from '../../component/Clock';
import Header from '../../component/Header'
import { useTimerLayoutEffect } from './useTimerLayoutEffect';

function TimerLatout( { isActivated, onTimer, timeAmount }: Props ) {
    const timeLeft = useTimerLayoutEffect( { isActivated, onTimer, timeAmount } );

    return (
        <section>
            <Header
                id="timer_header"
                level={ 2 }
                text='Just start type or click on the timer to chage the test time'
                aria-disabled={ !isActivated }
            />
            <span role="timer" >
                <Clock { ...fromNumberToClockValue( timeAmount - timeLeft ) } isActive={ isActivated } />
            </span>
        </section>
    )
}

export default TimerLatout
