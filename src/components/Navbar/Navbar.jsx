import Logo from '../Logo/Logo.jsx'
import Button from "../Button/Button/Button.jsx"
import Searchbar from "../SearchBar/Searchbar.jsx";
import styles from './Navbar.module.css'

export default function Navbar(){
    return(<>

        <nav className={styles.navbar}>
            <a href="/"><Logo/></a> 
            <Searchbar placeholder={"Search a song of your choice"}></Searchbar>
            <Button>Give Feedback</Button>
        </nav>
    </>)
}