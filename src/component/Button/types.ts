import { HTMLProps } from "react"

export interface Props extends Pick< HTMLProps< HTMLButtonElement >, "disabled" | "onClick" > {
    id: string
    title?: string
    icon?: "close"
    isSimple?: boolean
};
