export type HookReturns = [ isActive: boolean, timeLeft: number ];
export type HookProps = {
    isActivated: boolean
    startTime?: number
};

export interface Props {
    isActivated: boolean
}
