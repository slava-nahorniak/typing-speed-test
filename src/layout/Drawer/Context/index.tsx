import React, { ReactElement, useCallback, useContext, useMemo } from 'react';

// TODO: Implement DrawerContext class.
type DrawerStateNotOpened = {
    isOpened: false
    isClosable: undefined
}

type DrawerStateOpened = {
    isOpened: true
    isClosable: boolean
}

export type Drawer = DrawerStateNotOpened | DrawerStateOpened;

export const initialContext: Drawer = {
    isOpened: false,
    isClosable: undefined
};

 // TODO: Why it is necessary to add `vlue` in the Provider if here we have default initiation?
export const DrawerContext = React.createContext< Drawer >( initialContext );

type ArgsUseDrawerWith = [
    openWith: ReactElement
];
export const useDrawerContext = ( ...[ openWith ]: ArgsUseDrawerWith ) => {
    const drawer = useContext< Drawer >( DrawerContext );
    const children = useMemo( () => openWith, [ openWith ] );

    // ? can be avoided with the class implementation of the context.
    // const setIsDrawerOpened = useCallback( ( isOpened ) => {
    //     drawer.isOpened = true;
    //     drawer.isClosable = true;
    // }, [ children ] );

    return [ setIsDrawerOpened ];
}
