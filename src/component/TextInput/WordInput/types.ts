import { KeyboardEventHandler } from 'react';

export interface Props {
    word: string
    onRetypePreviousWord: () => void
    onTestNextWord: ( wordTyped: string ) => void
};

export type IUseTestWithWord = [ Exclude< KeyboardEventHandler< HTMLInputElement >, undefined > ]
