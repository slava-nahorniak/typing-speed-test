import React from 'react';
import Text from '../Text/component';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface Props extends React.HTMLAttributes< HTMLHeadingElement > {
    level: HeadingLevel
    text: string
};

const Header = ( { level, text, ...ownHTMLProps }: Props ) => {
    const headerId = ownHTMLProps.id;

    return React.createElement(
        `h${ level }`,
        ownHTMLProps,
        ( <Text
            id={ `${ headerId }_text` }
            text={ text }
            aria-labelledby={ headerId }
        /> )
    );
};

export default Header;
