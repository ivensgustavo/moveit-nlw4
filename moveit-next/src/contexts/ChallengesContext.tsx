import { createContext, ReactNode, useState } from 'react';

interface ChallengesContextData {
  level: number;
  currenteExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesContextProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currenteExperience, setCurrenteExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('New challenge');
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      currenteExperience,
      challengesCompleted,
      levelUp,
      startNewChallenge
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}