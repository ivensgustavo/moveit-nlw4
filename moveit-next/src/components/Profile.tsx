import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/58297601?v=4" alt="Gustavo Ivens" />
      <div>
        <strong>Gustavo Ivens</strong>
        <p>
          <img src="icons/level.svg" alt="Icon Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}