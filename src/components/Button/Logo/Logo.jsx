import React from 'react'
import styles from './Logo.module.css'
import {ReactComponent as Headphone}  from '../../../assets/headphone.svg'
import {ReactComponent as Text}  from '../../../assets/qtifyText.svg'

export default function Logo({name}){
    return(<>
        <Text className={styles.brandLogo}/>
        <Headphone className={styles.headphone}/>
        </>)
}