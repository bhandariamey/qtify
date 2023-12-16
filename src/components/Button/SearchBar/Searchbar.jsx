import React from "react"
import styles from './Searchbar.module.css'
import {ReactComponent as SearchIcon} from '../../../assets/SearchIcon.svg' 

export default function Searchbar({placeholder}){

    const onSubmit = (e)=>{
        e.preventDefault()
    }

    return(<>

        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input className = {styles.inputArea} type="text" placeholder={placeholder} required />
            <SearchIcon className={styles.searchButton} type="submit" />
        </form>    

    </>)
}