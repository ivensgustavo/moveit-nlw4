
import { useEffect, useState } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

    const [timeInSeconds, setTimeInSeconds] = useState(25 * 60);
    const [activeCountdown, setActiveCountdown] = useState(false);

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('');
    const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('');

    useEffect(() => {
        if (activeCountdown && timeInSeconds > 0) {
            setTimeout(() => {
                setTimeInSeconds(timeInSeconds - 1);
            }, 1000);
        }
    }, [activeCountdown, timeInSeconds])

    function startCountdown() {
        setActiveCountdown(true);
    }

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{leftMinute}</span>
                    <span>{rightMinute}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{leftSecond}</span>
                    <span>{rightSecond}</span>
                </div>
            </div>

            <button
                type="button"
                className={styles.countdownStartButtom}
                onClick={startCountdown}>
                Iniciar um ciclo
            </button>
        </div>

    );
}