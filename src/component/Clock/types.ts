export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type TimeDimentionTens =  Exclude< Digit,  7 | 8 | 9 | '7' | '8' | '9' >;

export interface Props {
    minutesTens: TimeDimentionTens
    minutesUnits: Digit
    secondsTens: TimeDimentionTens
    secondsUnits: Digit
    isActive: boolean
};
