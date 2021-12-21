import { ReactNode } from 'react';
import { Props as DrawerProps } from '../../Layout/Drawer';
import { IUseDrawer } from './types';

class UseDrawerClass implements IUseDrawer {
    private _children: ReactNode;
    private _title: string | null;
    
    private _isClosable: boolean | null;
    private _isVisible:  boolean;
    
    constructor () {
        this._children = null;
        this._title = null;

        this._isVisible = false;
        this._isClosable = null;
    }
    
    public get isVisible() {
        return this._isClosable !== null && this._isVisible;
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
    };
    public set children( value: ReactNode ) {
        this._children = value;

        if ( !Boolean( value ) ) { this._isClosable = null };
    };

    public get title() {
        return this._title;
    };
    public set title( value: string | null ) {
        this._title = value;
    };

    public useDrawer( { // TODO: split onto two functions: show and hide. Investigate: Could I make setters private with that?
        children,
        title
    }: Pick< DrawerProps, "children" | "title" > ) {
        this.title = title;
        this.children = children;

        return [ this.isVisible,  ]
    }
}

const drawerService = new UseDrawerClass();

export default drawerService as IUseDrawer;
