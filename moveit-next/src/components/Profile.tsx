import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/58297601?v=4" alt="Gustavo Ivens" />
            <div>
                <strong>Gustavo Ivens</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}