import Image from "next/image";
import styles from "../styles/Filter.module.css"
import FilterData from '../comps/FilterData'

function Filter() {
    
    return (
        <div className={styles.cont}>
        <div className={styles.filterIconsContainer}>
            {FilterData.map(item => {
                    return (<div className={styles.filterIconsItem} key={item.id}>
                        <div className={styles.iconContainer}>
                            <Image src={item.src} width={20} height={20}/>
                        </div>
                        <div className={styles.title}>
                            {item.title}
                        </div>
                    </div> )
                
                
                
            })}
        </div>
        </div>
    )
}

export default Filter;