import styles from './Homepage.module.css'
import Hero from '../../components/Hero/Hero';
import { useOutletContext } from 'react-router-dom';
import Section from '../../components/Section/Section';
import { fetchFilters } from '../../Api/Api';

export default function Homepage(){
    const {data} = useOutletContext();
    const {topAlbums, newAlbums, songs} = data

    return(<>
        <Hero/>
        <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album"/>
        <Section title="New Albums" data={newAlbums} type="album"/>
        <Section title="songs" data={songs} type="song" filterSource={fetchFilters}/>

        </div>
    </>)
}