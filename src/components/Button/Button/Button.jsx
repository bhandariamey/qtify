import styles from "./Button.module.css"

export default function Button({children}){
    return(<>
    <button className={styles.feedbackButton}>{children}</button>
    </>)
}