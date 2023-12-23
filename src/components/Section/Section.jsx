import { CircularProgress } from "@mui/material"
import Card from "../Card/Card"
import { useState } from "react"
import styles from './Section.module.css'
import Carousel from "../Carousel/Carousel"

export default function Section ({title, data, type}){

    const [carouselToggle, setcarouselToggle] = useState(true)

    const handleToggle = ()=>{
        setcarouselToggle((prevState)=>!prevState)
    }

    return(<>
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 onClick={handleToggle} className={styles.toggleText}> {!carouselToggle ? "Collapse All" : "Show All"}</h4>
        </div>
        {data.length === 0 ? (
        <CircularProgress/>
        ): (
        <div className={styles.cardWrapper}>
                {
                    !carouselToggle
                    ? (<div className={styles.Wrapper}>
                       { data.map((item)=>
                            ( <Card data={item} type={type}/>)
                       )}
                    </div>)
                    : <Carousel data={data} renderComponent={(data)=><Card data={data} type={type}/>}/>
                }
            </div>)
        }


    </div>

    </>)
}