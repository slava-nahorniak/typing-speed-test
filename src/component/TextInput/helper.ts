import { IMoveContentOptions, POSITION,  DataContent, DATA_CONTENT_PREFIX  } from './types';

export const getSpanWithData = ( dataPrefix: DATA_CONTENT_PREFIX, { index, content, expected }: DataContent ) => {
    const spanElement = document.createElement( 'span' );
    const spanData = spanElement.dataset;

    spanElement.classList.add( dataPrefix );

    spanData[ `${ dataPrefix }Index` ] = index.toString();
    spanData[ `${ dataPrefix }Expected` ] = expected;
    spanData[ `${ dataPrefix }Content` ] = content;

    return spanElement;
}

export const getContentFromSpan = ( dataPrefix: DATA_CONTENT_PREFIX, spanElement: HTMLSpanElement ) => {
    const index = parseInt( spanElement.dataset[ `${ dataPrefix }Index` ]!, 10 );
    const content = spanElement.dataset[ `${ dataPrefix }Content` ];
    const expected = spanElement.dataset[ `${ dataPrefix }Expected` ];

    return {
        index, content, expected
    };
}

export const validateContentInSpan = ( spanElement: HTMLSpanElement, dataPrefix: DATA_CONTENT_PREFIX ) => {
    return spanElement.dataset[ `${ dataPrefix }Content` ]
        === spanElement.dataset[ `${ dataPrefix }Expected` ];
}

export const addContent = ( spanElement: HTMLSpanElement, dataPrefix: DATA_CONTENT_PREFIX, content: string ) => {
    spanElement.dataset[ `${ dataPrefix }Content` ] = content;
}

export const moveContent = (
    from: Pick< IMoveContentOptions, "target" | "position" >,
    to: Pick< IMoveContentOptions, "target" | "position" >,
    dataPrefix: DATA_CONTENT_PREFIX
) => {
    const spanElement = from.target[ from.position ] as HTMLSpanElement;
    spanElement!.remove();

    if ( spanElement ) {
        if ( to.position === POSITION.FIRST ) {
            if ( spanElement.classList.contains( `${ dataPrefix }__invalid` ) ) {
                spanElement.classList.remove( `${ dataPrefix }__invalid` );
            };

            spanElement.dataset[ `${ dataPrefix }Content` ] = spanElement.dataset[ `${ dataPrefix }Expected` ];

            to.target.prepend( spanElement );
        }

        if ( to.position === POSITION.LAST ) {
            if ( !validateContentInSpan( spanElement, dataPrefix ) ) {
                spanElement.classList.add( `${ dataPrefix }__invalid` );
            };

            to.target.append( spanElement );
        }
    }
};
