import { TENS } from '../../const';

export const getTensFromNumber = ( value: number ) => {
    return Math.trunc( value / TENS );
}
