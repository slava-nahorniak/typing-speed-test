import React from 'react';

export interface Context {
    children?: React.ReactChildren | null,
    state: {
        isOpened: boolean
    }
}

const initialContext: Context = {
    children: null,
    state: {
        isOpened: false
    }
};

export const DrawerContext = React.createContext< Context >( initialContext );

const useDrawerContext = ( {} ) => {

}
