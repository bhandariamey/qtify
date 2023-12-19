import HeroImage from '../../assets/hero.png'
import styles from './Hero.module.css'
export default function Hero(){
    return(<>
        <div className={styles.heroWrapper}>
            <div >
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div>
                <img src={HeroImage} alt="Headphone" width={112} />
            </div>
        </div>
    </>)
}