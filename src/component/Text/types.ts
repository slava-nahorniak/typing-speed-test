import { HTMLProps } from "react";

export interface Props extends HTMLProps< HTMLSpanElement > {
    text: string | number
};
