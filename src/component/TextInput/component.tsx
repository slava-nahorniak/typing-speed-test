import { useCallback, useMemo, useRef } from 'react';
import { DATA_CONTENT_PREFIX, POSITION } from './types';
import WordInput, { Props as WordInputProps } from './WordInput';
import { getSpanWithData, moveContent, validateContentInSpan } from './helper';
import { Props } from './types';

// Todo: [ Useness of an appropriate `aria-` attributes for spans ]: need some research.
const TextInput = ( { words, onKeyDown }: Props ) => {
    const indexOfWord = useRef< number >( 0 );

    const wordsTypedRef = useRef< HTMLSpanElement >( null );
    const wordsToTypeRef = useRef< HTMLSpanElement >( null );

    const word = words[ indexOfWord.current ];

    const handleTestNextWord = useCallback< WordInputProps[ "onTestNextWord" ] >( wordTyped => {
        const elementWordsTyped = wordsTypedRef.current;
        if ( elementWordsTyped ) {
            const wordSpan = getSpanWithData(
                DATA_CONTENT_PREFIX.WORD,
                {
                    content: wordTyped,
                    expected: words[ indexOfWord.current ],
                    index: indexOfWord.current
                }
            );

            if ( !validateContentInSpan( wordSpan, DATA_CONTENT_PREFIX.WORD ) ) {
                wordSpan.classList.add( `${ DATA_CONTENT_PREFIX.WORD }__invalid` );
            }

            elementWordsTyped.append( wordSpan );

            indexOfWord.current += 1;
        }
    }, [ words ] );

    const handleRetypePreviousWord = useCallback< WordInputProps[ "onRetypePreviousWord" ] >( () => {
        moveContent(
            { target: wordsTypedRef.current!, position: POSITION.LAST },
            { target: wordsToTypeRef.current!, position: POSITION.FIRST },
            DATA_CONTENT_PREFIX.WORD
        );
    }, [] );

    const textToType = useMemo( () => words.slice( indexOfWord.current ).join( ' ' ), [ words ] );

    return (
        <p className="pa w-100" onKeyDown={ onKeyDown } >
            <span
                className=""
                ref={ wordsTypedRef }
            />
            <WordInput
                word={ word }
                onTestNextWord={ handleTestNextWord }
                onRetypePreviousWord={ handleRetypePreviousWord }
            />
            <span
                className=""
                ref={ wordsToTypeRef }
            >
                { textToType }
            </span>
        </p>
    )
};

export default TextInput;
