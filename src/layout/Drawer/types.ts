import { Props as HeaderProps } from '../../component/Header';
import { Props as ButtonProps } from '../../component/Button';
import { HTMLProps, PropsWithChildren } from "react";

export interface Props extends PropsWithChildren< Pick< HTMLProps< HTMLElement > , "className" > > {
    title: HeaderProps[ "text" ]
    onCloseClick?: ButtonProps[ "onClick" ]
    isClosable?: ButtonProps[ "disabled" ]
};
