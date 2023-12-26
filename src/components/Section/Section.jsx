import { CircularProgress } from "@mui/material"
import Card from "../Card/Card"
import { useState, useEffect } from "react"
import styles from './Section.module.css'
import Carousel from "../Carousel/Carousel"
import Filters from "../Filters/Filters"

export default function Section ({title, data, type, filterSource}){

    const [carouselToggle, setcarouselToggle] = useState(true)
    const [filters, setFilters] = useState([{key:'all', label:'All'}]) // list of filters
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0) // initial state

    const handleToggle = ()=>{
        setcarouselToggle((prevState)=>!prevState)
    }

    //getting filters
    useEffect(()=>{
        if(filterSource){
            filterSource().then((response)=>{
                const {data} = response;
                setFilters([...filters, ...data ])
            })
        }
    },[])

    const showFilters = filters.length > 1
    const cardToRender = data.filter((card)=>showFilters && selectedFilterIndex!==0
            ?card.genre.key === filters[selectedFilterIndex].key 
            :card)

    

    return(<>
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
{        !filterSource &&    <h4 onClick={handleToggle} className={styles.toggleText}> {!carouselToggle ? "Collapse All" : "Show All"}</h4>
}        </div>

        {showFilters && <div className={styles.filterWrapper}>
            <Filters filters={filters} 
            selectedFilterIndex={selectedFilterIndex} 
            setSelectedFilterIndex={setSelectedFilterIndex}/>
            </div>}

        {data.length === 0 ? (
        <CircularProgress/>
        ): (
        <div className={styles.cardWrapper}>
                {
                    !carouselToggle
                    ? (<div className={styles.Wrapper}>
                       { cardToRender.map((item)=>
                            ( <Card data={item} type={type}/>)
                       )}
                    </div>)
                    : <Carousel data={cardToRender} renderComponent={(data)=><Card data={data} type={type}/>}/>
                }
            </div>)
        }


    </div>

    </>)
}