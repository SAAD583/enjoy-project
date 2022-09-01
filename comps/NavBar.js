import Image from "next/image"
import styles from "../styles/NavBar.module.css"

export default function NavBar() {
    return (
        <nav>
            <div className={styles.navContainer}>
                <div className={styles.logoContainer}>
                    <Image src="/enjoy.png" width={110} height={45} />
                </div>
                <div className={styles.searchContainer}>
                    <div className={styles.searchIcon}>
                    <Image src="/search.png" width={18} height={18}/>
                    </div>
                    <input placeholder="Search" className={styles.searchInput}/>
                </div>
                <div className={styles.accountContainer}>
                    <span>Sign up</span>    
                    <Image src="/user.png" width={32} height={32} className={styles.user}/>
                </div>
            </div>
        </nav>
    )
}