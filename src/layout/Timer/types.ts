// export type HookReturns = [ isActive: boolean, timeLeftRef: number ];
export type HookProps = {
    isActivated: boolean
    timeAmount: number
    onTimer?: Props[ 'onTimer' ]
};

export interface Props {
    timeAmount: number
    isActivated: boolean
    onTimer?: () => void
}
