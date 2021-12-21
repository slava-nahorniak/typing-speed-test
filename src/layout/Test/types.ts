import { KeyboardEventHandler, MutableRefObject } from 'react';

export interface Props {
    usedTimeAmount: number
}

export type UseTestInput = [
    KeyboardEventHandler<HTMLInputElement>,
    MutableRefObject< number >
]
