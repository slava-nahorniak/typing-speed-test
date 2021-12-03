import { HTMLProps } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface Props extends Pick< HTMLProps< HTMLHeadingElement >, "id" | "className" > {
    level: HeadingLevel
    text: string
};
