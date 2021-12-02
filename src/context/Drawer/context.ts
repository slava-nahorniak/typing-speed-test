import { ReactNode } from 'react';
import { IDrawerContext } from './type';

class DrawerContextClass implements IDrawerContext {
    private _isClosable: boolean | null;
    private _isVisible:  boolean;
    private _children: ReactNode;

    private _title: string;

    
    constructor () {
        this._isVisible = false;
        this._isClosable = null;

        this._children = null;
    }
    
    public get isVisible() {
        return typeof this._isClosable !== null && this._isVisible;
    };
    public set isVisible( value ) {
        if ( value && !this._children ) {
            value = false;
        }

        this._isVisible = value;

        if ( value ) {
            this._isClosable = true;
        } else {
            this._isClosable = null;
            this._children = null;
        }
    };

    public get isClosable() {
        return this._isClosable;
    };
    public set isClosable( value ) {
        this._isClosable = value;
    };

    public get children() {
        return this._children;
    }
    public set children( value: ReactNode ) {
        this._children = value;
    }

    static useDrawer( { title, children,  } ) {}
}

const drawerContext = new DrawerContextClass();

export default drawerContext as IDrawerContext;
