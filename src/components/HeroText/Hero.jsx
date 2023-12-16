import styles from './Hero.module.css'

export default function Hero(){
    return(<>
   <div className={styles.heroWrapper}>
        <p className={styles.heroText}>100 Thousand Songs, ad-free</p>
        <p className = {styles.heroText}>Over thousands podcast episodes</p>
   </div>
    </>)
}