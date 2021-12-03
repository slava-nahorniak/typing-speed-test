import { ReactNode } from "react";
import { Props as DrawerProps } from "../../Layout/Drawer";

export interface IUseDrawer {
    get isVisible(): boolean
    set isVisible( value: boolean )

    get isClosable(): boolean | null
    set isClosable( value: boolean | null )

    get children(): ReactNode
    set children( value: ReactNode )

    get title(): string | null
    set title( value: string | null )

    useDrawer: ( props: DrawerProps ) => void
}
