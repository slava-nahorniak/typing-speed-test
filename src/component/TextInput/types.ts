import { KeyboardEventHandler } from "react"

export interface Props {
    words: string[]
    onKeyDown: KeyboardEventHandler
};

export const enum POSITION {
    FIRST = 'firstElementChild',
    LAST = 'lastElementChild'
}

export interface IMoveContentOptions {
    target: HTMLSpanElement
    position: POSITION
}

export const enum DATA_CONTENT_PREFIX {
    CHAR = 'symbol',
    WORD = 'word'
}

export type DataContent = {
    index: number
    content: string
    expected: string
}
