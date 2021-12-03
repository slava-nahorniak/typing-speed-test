import { Props as TextProps } from './types';

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
