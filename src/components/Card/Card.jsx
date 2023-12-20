import {Chip, Tooltip} from '@mui/material';
import styles from './Card.module.css'

export default function Card({data,type}){
    console.log(data);
    const getCard = (type)=>{
        switch(type){
            case 'album' :  { 
                return(<div className={styles.gridContainerStyle}>
                {data.map((item, index) => (
                  <div key={index}>
                       <Tooltip title={`${item.songs.length}`} placement="top" arrow>
                         <a href={`/album/${item.slug}`}>
                           <div className={styles.Wrapper}>
                             <div className={styles.Card}>
                               <img src={item.image} alt="song" loading="lazy" />
                               <div className={styles.Banner}>
                                 <Chip
                                   label={`${item.follows} Follows`}
                                   size="small"
                                   className={styles.Chip}
                                 />
                               </div>
                             </div>
                             <div className={styles.titleWrapper}>
                               <p>{item.title}</p>
                             </div>
                           </div>
                         </a>
                       </Tooltip>
                  </div>
                ))}
              </div>)

                
                  
            }

            // case 'song' :  {
            //     const {likes,image,title} = data;
            //     return(<>
            //         <div className={styles.Wrapper}>
            //             <div className={styles.Card}>
            //                 <img src={image} alt="song" loading="lazy" />
            //                 <div className={styles.Banner}>
            //                     <div className={styles.Pill}>
            //                         <p>{likes} Likes</p>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div className={styles.titleWrapper}> 
            //                 <p>{title}</p>
            //             </div>
            //         </div>
            //     </>)
            //     }

            default:
                 return <></>
        }

    }
    
     return (
       getCard(type)
)
}