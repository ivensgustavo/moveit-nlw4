import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownContextProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const initialTimeInSeconds = 0.1 * 60;
  const [timeInSeconds, setTimeInSeconds] = useState(initialTimeInSeconds);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout) //Faz com que não espere mais um segundo para parar
    setIsActive(false);
    setHasFinished(false);
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
      startNewChallenge();
    }
  }, [isActive, timeInSeconds])

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown,
    }}>
      {children}
    </CountdownContext.Provider>
  )
}