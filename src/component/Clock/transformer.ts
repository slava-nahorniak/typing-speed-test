import { Digit, Props as ClockProps, TimeDimentionTens } from '.';
import { MINUTES_IN_HOUR, SECONDS_IN_MINUTE, TENS } from '../../const';
import { getTensFromNumber } from './helper';

export const fromNumberToClockValue = ( value: number ): Pick< ClockProps, "minutesTens" | "minutesUnits" | "secondsTens" | "secondsUnits" > => {
    let minutes = Math.trunc( value / SECONDS_IN_MINUTE );

    if ( minutes > MINUTES_IN_HOUR ) {
        minutes = MINUTES_IN_HOUR;
    }

    const seconds = value - minutes * SECONDS_IN_MINUTE;
    const minutesTens = getTensFromNumber( minutes );
    const secondsTens = getTensFromNumber( seconds );

    return {
        minutesTens: String( minutesTens ) as TimeDimentionTens,
        minutesUnits: String( minutes - minutesTens * TENS ) as Digit,
        secondsTens: String( secondsTens ) as TimeDimentionTens,
        secondsUnits: String( seconds - secondsTens * TENS ) as Digit
    }
}
