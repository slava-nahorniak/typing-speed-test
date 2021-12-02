const TIME_DIMENTION_VALUE = 1;
type TimeDivisionValue = typeof TIME_DIMENTION_VALUE extends infer O ? O : never;

export const TIME_DIMENTION = 60;
type TimeDivision = typeof TIME_DIMENTION extends infer V ? V : never;

const SECOND: TimeDivisionValue = 1;
type Seconds = typeof SECOND;
const MINUTE: TimeDivisionValue = 1;
const HOUR: TimeDivisionValue = 1;

// const UNSIGNER = 0;
// type NoSigner = typeof UNSIGNER;

// type Operator< T extends number, A extends number, B extends number > = T extends infer C ? C | (IsEqual< C, A > extends true ? A : C) & (IsEqual< C, B > extends true ? B : C) : never;

// type Extender< A extends T, B extends T, T extends number > = Operator< T, A, B > extends infer E
//     ? IsEqual< E, A > extends true
//         ? B
//         : IsEqual< E, B > extends true
//             ? A
//             : never
//     : T

// type TimeConversion< A extends TimeDivisionValue, B extends TimeDivision > = number extends infer C
//     ? A extends true ? C
//     : never;

type Multiplication< A extends number, B extends number > = ( a: A, b: B ) =>  number extends infer T ? T : never;
const multiplicate: Multiplication< number, number > = ( a, b ) => {
    return a * b;
}

// type EqualMultiplication< A, B, T > = ( a: A, b: B ) => IsEqual< T, A > extends true ? T : IsEqual< T, B > extends true ? T : never;

// const isEqualMultiplication = < A extends number, B extends TimeDivisionValue >( m: Multiplication< A, B >, a: A, b: B, ): m is EqualMultiplication< A, B, A > & Multiplication< B, A > => {
//     const result = m( a, b );

//     if ( result === a ) { return true }

//     return false;
// }

// const isSeconds =  isEqualMultiplication( multiplicate, TIME_DIVISION, SECOND );
// type Convertion< Seconds > = typeof isSeconds extends true ? Seconds : never;

// type ConvertedValue< A extends TimeDivision, B extends TimeDivisionValue > = number extends infer T ? IsEqual< T, A > extends true ? T : IsEqual< T, B > extends true ? T : never : never;

export const SECONDS_IN_MINUTE/*: Convertion< Seconds >*/ = multiplicate(TIME_DIMENTION, SECOND);
export const MINUTES_IN_HOUR = TIME_DIMENTION * MINUTE;

export const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * MINUTES_IN_HOUR;

export const TENS = 10;
