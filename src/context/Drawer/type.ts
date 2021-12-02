import { ReactNode } from "react";

export interface IDrawerContext {
    get isVisible(): boolean
    set isVisible( value: boolean )

    get isClosable(): boolean | null
    set isClosable( value: boolean | null )

    get children(): ReactNode
    set children ( value: ReactNode )
}
