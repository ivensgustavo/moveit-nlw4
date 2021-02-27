import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown } = useContext(CountdownContext);

  //Quando o minuto não for um número de 2 dígitos, adicione um 0 na frente
  const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('');
  const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('');

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