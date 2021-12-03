import Text from '../Text';
import cx from 'classnames';
import styles from './component.scss';
import { Props } from './types';

const Clock = ( {
    minutesTens,
    minutesUnits,
    secondsTens,
    secondsUnits,
    isActive
}: Props ) => {
    // TODO: Investigate. Do we need to wrap `cx` with useMemo?
    const colonClasses = cx({
        [styles.colon]: true,
        [styles.colon__flashing]: isActive
    });

    return (
        <section
            aria-disabled={ isActive }
        >
            <Text
                key="timer_minutes"
                id="timer_minutes"
                text={ minutesTens }
            />
            <Text
                key="timer_minute"
                id="timer_minute"
                text={ minutesUnits }
            />
            
            <Text
                key="timer_colon"
                id="timer_colon"
                text=" : "
                className={ colonClasses }
            />
            <Text
                key="timer_seconds"
                id="timer_seconds"
                text={ secondsTens }
            />
            <Text
                key="timer_second"
                id="timer_second"
                text={ secondsUnits }
            />
        </section>
    )
}

export default Clock;
