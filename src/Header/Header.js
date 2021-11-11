import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from "./Header.module.scss"
function Header() {

        const [classNames, setClassNames] = useState({
            menu: styles.menu,
            nav: styles.nav
        })

    const toggleMenu = (e) => {

        if (classNames.menu === styles.menu && classNames.nav === styles.nav ){

            setClassNames({
                menu: `${styles.menu} ${styles.open}`,
                nav: `${styles.nav} ${styles.open}`
            })
            
        }

        else{

            setClassNames({
                menu: styles.menu,
                nav: styles.nav
            })
        }
    }

    return (
        <header className={styles.header}>

                <div className={styles.absoluteHeader}>
                
                    <Link to="/" className={styles.logoContainer} onClick={classNames.menu === `${styles.menu} ${styles.open}` ?
                    toggleMenu : false}>
{  //                      <ImHome3 className={styles.home3} size="47" />
                            <img src="/favicon.svg" alt="logo"/>
}                    </Link>

                    <div className={classNames.menu} onClick={toggleMenu}>

                        <div className={styles.burger}></div>
                    </div>

                </div>


                <nav className={classNames.nav}>
                    <Link to="/" onClick={toggleMenu}><span>HOME</span></Link>
                    <Link to="/portfolio" onClick={toggleMenu}><span>PORTFOLIO</span></Link>
                    <Link to="/contact" onClick={toggleMenu}><span>CONTACT</span></Link>
                </nav>
            
        </header>
    )
}

export default Header
