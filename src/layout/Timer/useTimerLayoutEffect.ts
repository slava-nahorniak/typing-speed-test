import { useEffect, useRef, useState } from 'react';
import { DEFAULT_TIMER_VALUE } from './const';

type HookReturns = [ isActive: boolean, timeLeft: number ];
type HookProps = {
    isActivated: boolean
    startTime?: number
};

export const useTimerLayoutEffect = ( { isActivated, startTime = DEFAULT_TIMER_VALUE }: HookProps ): HookReturns => {
    debugger;
    const [ isHandlingInterval, setIsHandlingInterval ] = useState< boolean >( isActivated );
    const timePassedRef = useRef< number >( 0 );

    useEffect( () => {
        if ( isActivated && !isHandlingInterval ) {
            setIsHandlingInterval( true );
        }
    }, [ isActivated, isHandlingInterval ] );

    useEffect( () => {
        startTime - timePassedRef.current === 0 && isHandlingInterval && setIsHandlingInterval( false );
    }, [ isHandlingInterval, startTime, timePassedRef.current ] ); // TODO: investigate needness of startTime.

    useEffect( () => {
        // TODO: I think the overall time must be verified with the implementation below. It must differ for [some value].
        // TODO: investigate when will be the change of isActive handled.
        const timer = isHandlingInterval && setInterval( () => {
            timePassedRef.current += 1;
        }, 1000 );

        return () => {
            if ( timer ) {
                clearInterval( timer );
            }
        };
    }, [ isHandlingInterval ] );

    return [ isHandlingInterval, timePassedRef.current ];
}
