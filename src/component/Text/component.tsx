import React from 'react';

export interface TextProps extends React.HTMLAttributes< HTMLSpanElement > {
    text: string | number
};

const Text = ( { text, ...ownHTMLProps }: TextProps ) => {
    return (
        <span
            { ...ownHTMLProps }
        >
            { text }
        </span>
    )
};

export default Text;
