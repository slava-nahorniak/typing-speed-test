import React from 'react';
import Text from '../Text';

export interface Props {
    id: string
    onClick: React.MouseEventHandler
    title: string
    icon: React.ReactElement
};

const Button = ({ id, title, icon, onClick }: Props) => {
    return (
        <button
            id={ id }
            onClick={ onClick }
        >
            { title && <Text
                aria-labelledby={ id }
                text={ title }
            /> }
            { Boolean( icon ) && icon }
        </button>
    )
};

export default Button;
