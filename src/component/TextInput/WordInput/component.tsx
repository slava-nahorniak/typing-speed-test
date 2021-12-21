import { useRef } from 'react';
import { Props } from './types';
import { useTestWord } from '../useTestWord';

// Todo: [ Useness of an appropriate `aria-` attributes for spans ]: research
const WordInput = ( props: Props ) => {
    const charsTypedRef = useRef< HTMLSpanElement >( null );
    const charsToTypeRef = useRef< HTMLSpanElement >( null );

    const [ handleKeyUp ] = useTestWord( charsTypedRef.current, charsToTypeRef.current, props );

    return (
        <>
            <span
                className=""
                ref={ charsTypedRef }
            />
            <input // TODO: Maybe, it is better NOT to use an input, because of possibility of loosing focus?
                className="test-input"
                onKeyUp={ handleKeyUp }
            />
            <span
                className=""
                ref={ charsToTypeRef }
            />
        </>
    )
};

export default WordInput;
