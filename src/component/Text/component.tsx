import { Props } from './types';

const Text = ( { text, ...ownHTMLProps }: Props ) => {
    return (
        <span
            { ...ownHTMLProps }
        >
            { text }
        </span>
    )
};

export default Text;
