import {Chip, Tooltip} from '@mui/material';
import styles from './Card.module.css'

export default function Card({data,type}){
    const getCard = (type)=>{
        switch(type){
            case 'album' :  { 
              const {title,follows,slug,image,songs} = data;
              return(<>
              <Tooltip title={`${songs.length}`} placement="top" arrow>
                         <a href={`/album/${slug}`}>
                           <div className={styles.Wrapper}>
                             <div className={styles.Card}>
                               <img src={image} alt="song" loading="lazy" />
                               <div className={styles.Banner}>
                                 <Chip
                                   label={`${follows} Follows`}
                                   size="small"
                                   className={styles.Chip}
                                 />
                               </div>
                             </div>
                             <div className={styles.titleWrapper}>
                               <p>{title}</p>
                             </div>
                           </div>
                         </a>
                       </Tooltip>
              </>)
                       
            }

            case 'song' :  {
                const {likes,image,title} = data;
                return(<>
                    <div className={styles.Wrapper}>
                        <div className={styles.Card}>
                            <img src={image} alt="song" loading="lazy" />
                            <div className={styles.Banner}>
                                <div className={styles.Pill}>
                                    <p>{likes} Likes</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.titleWrapper}> 
                            <p>{title}</p>
                        </div>
                    </div>
                </>)
                }

            default:
                 return <></>
        }

    }
    
     return (
       getCard(type)
)
}