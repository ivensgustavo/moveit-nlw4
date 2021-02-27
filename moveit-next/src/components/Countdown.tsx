import { useEffect, useState } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

    const initialTimeInSeconds = 0.1 * 60;
    const [timeInSeconds, setTimeInSeconds] = useState(initialTimeInSeconds);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('');
    const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout) //Faz com que não espere mais um segundo para parar
        setIsActive(false);
        setTimeInSeconds(initialTimeInSeconds);

    }

    useEffect(() => {
        if (isActive && timeInSeconds > 0) {
            countdownTimeout = setTimeout(() => {
                setTimeInSeconds(timeInSeconds - 1);
            }, 1000);
        } else if (isActive && timeInSeconds === 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, timeInSeconds])

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

            {
                hasFinished ? (
                    <button
                        disabled
                        className={styles.countdownStartButtom}
                    >
                        Ciclo encerrado
                    </button>
                ) : (
                        <>
                            {
                                isActive ? (
                                    <button
                                        type="button"
                                        className={`${styles.countdownStartButtom} ${styles.countdownButtomActive}`}
                                        onClick={resetCountdown}>
                                        Abandonar ciclo
                                    </button>
                                ) : (
                                        <button
                                            type="button"
                                            className={styles.countdownStartButtom}
                                            onClick={startCountdown}>
                                            Iniciar um ciclo
                                        </button>
                                    )
                            }

                        </>
                    )
            }


        </div>

    );
}