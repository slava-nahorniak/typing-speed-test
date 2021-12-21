import { KeyboardEventHandler, useCallback, useEffect, useMemo } from 'react';
import { POSITION, DATA_CONTENT_PREFIX } from './types';
import { moveContent, getSpanWithData, getContentFromSpan, addContent } from './helper';
import { IUseTestWithWord, Props as WordInputProps } from './WordInput'

export const useTestWord = (
    spanWithCharsTyped: HTMLSpanElement | null,
    spanWithCharsToType: HTMLSpanElement | null,
    { word, onRetypePreviousWord, onTestNextWord: onUseNextWord }: WordInputProps
) => {
    useEffect( () => {
        if ( spanWithCharsToType )
        {
            spanWithCharsToType.append(
                // heads up! I add the `space` symbol to the end of the word here;
                ...( word + ' ' ).split( '' ).map( ( char, index ) =>
                    getSpanWithData(
                        DATA_CONTENT_PREFIX.CHAR,
                        { index, content: char, expected: char }
                    )
                )
            );
        }
    }, [ spanWithCharsToType, word ] );

    useEffect( () => {
        if ( spanWithCharsTyped && spanWithCharsTyped.childElementCount === word.length )
        {
            const charsTypedArray = [];
            const charElements = spanWithCharsTyped.children;
            
            // heads up! Here I do not count the `space` symbol had been added before;
            for ( let index = 0; index < charElements.length - 1; index++ ) {
                const { index: charPosition, content: char } = getContentFromSpan(
                    DATA_CONTENT_PREFIX.CHAR,
                    charElements[ index ] as HTMLSpanElement
                );
                
                charsTypedArray[ charPosition ] = char;
            }

            onUseNextWord( charsTypedArray.join( '' ) );
        }
    }, [ word, spanWithCharsTyped, onUseNextWord ] );

    const handleKeyUp = useCallback< Exclude< KeyboardEventHandler< HTMLInputElement >, undefined > >( event => {
        if ( !spanWithCharsTyped || !spanWithCharsToType )
        {
            return;
        }

        switch ( event.key ) {
            case 'Backspace':
            {
                if ( spanWithCharsTyped.children.length === 0 )
                {
                    onRetypePreviousWord();
                } else {
                    moveContent(
                        { target: spanWithCharsTyped, position: POSITION.LAST },
                        { target: spanWithCharsToType, position: POSITION.FIRST },
                        DATA_CONTENT_PREFIX.CHAR
                    );
                }

                break;
            }
            case 'Enter':
            case 'Escape':
            {
                break;
            }
            default:
            {
                addContent( spanWithCharsToType, DATA_CONTENT_PREFIX.CHAR, event.key );
                moveContent(
                    { target: spanWithCharsToType, position: POSITION.FIRST },
                    { target: spanWithCharsTyped, position: POSITION.LAST },
                    DATA_CONTENT_PREFIX.CHAR
                );
            }
        }
    }, [ spanWithCharsToType, spanWithCharsTyped, onRetypePreviousWord ] );

    return useMemo< IUseTestWithWord >( () => [ handleKeyUp ], [ handleKeyUp ] );
}
