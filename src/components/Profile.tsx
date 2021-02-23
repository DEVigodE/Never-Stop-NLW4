import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ZIBMBRAZIL.png" alt="Igor Bittencourt" />
            <div>
                <strong>Igor Bittencourt</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}