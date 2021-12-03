import { createElement } from 'react';
import Text from '../Text/component';
import { Props } from './types';

const Header = ( { level, text, ...ownHTMLProps }: Props ) => { // TODO: concretize props in the types
    const headerId = ownHTMLProps.id;

    return createElement(
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
