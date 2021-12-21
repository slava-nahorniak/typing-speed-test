import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { HookProps } from './types';

export const useTimerLayoutEffect = ( { isActivated, timeAmount, onTimer }: HookProps ): number => {
    const [ ticks, setTicks ] = useState< number >( 0 );
    const ticksRef = useRef< number >( ticks );

    const [ timerId, setTimerId ] = useState< ReturnType< typeof setInterval > | null >( null );

    const catchOnTimer = useCallback(
        () => {
            if ( timerId && ( timeAmount - 1 ) - ticks === 0 ) {
                setTimerId( null );
                clearInterval( timerId );

                onTimer && onTimer();

                ticksRef.current = 0;
                setTicks( 0 );
            }
        },
        [ timerId, onTimer, timeAmount, ticks ],
    );

    const handleTimerActivation = useMemo(
        () => isActivated
            ? () => {
                if ( !timerId ) {
                    setTimerId(
                        setInterval( () => {
                            debugger;
                            console.info( performance.now() );
                            ticksRef.current += 1;
                            setTicks( ticksRef.current );
                        }, 1000 )
                    );
                }
            } : undefined,
        [ isActivated, timerId ],
    );

    useEffect( () => {
        if ( handleTimerActivation ) {
            handleTimerActivation();
        
            return catchOnTimer;
        }
    }, [ handleTimerActivation, catchOnTimer ] );

    return ticks;
}
