import React, { MouseEventHandler } from 'react';
import Text from '../Text';
import cx from 'classnames';

export interface Props extends Pick< HTMLButtonElement , "disabled" > {
    id: string
    onClick: MouseEventHandler
    title?: string
    icon?: "close"
    isSimple?: boolean
};

const Button = ( {
    id,
    title,
    icon,
    isSimple = false,
    disabled = false,
    onClick
}: Props ) => {
    const buttonClasses = cx( { 'button__simple': isSimple, 'button': true } );

    return (
        <button
            id={ id }
            onClick={ onClick }
            className="buttonClasses"
            disabled={ disabled }
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
