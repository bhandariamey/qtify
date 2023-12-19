import React from 'react'
import styles from './Logo.module.css'
import LogoImage from '../../assets/qtifyLogo.png'

export default function Logo({name}){
    return(<>
        <img src={LogoImage} alt="Logo" width={67}/>
        </>)
}