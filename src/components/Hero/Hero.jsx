import HeroImage from '../../assets/hero.png'
import styles from './Hero.module.css'
export default function Hero(){
    return(<>
        <div className={styles.heroWrapper}>
            <div className={styles.heroText}>
                <p>100 Thousand Songs, ad-free</p>
                <p>Over thousands podcast episodes</p>
            </div>
            <div className={styles.heroImage}>
                <img src={HeroImage} alt="Hero" />
            </div>
        </div>
    </>)
}