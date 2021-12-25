import Link from 'next/link'
import {FaBars} from 'react-icons/fa'
import {useState} from 'react'
import navStyles from '../styles/Nav.module.css'

function Nav() {
    const [clicked, setClicked] = useState({style: navStyles.navlistHidden})

    function handleClickBurger() {
        setClicked(prevState => {
            return prevState.style === navStyles.navlist ? {style: navStyles.navlistHidden} : {style: navStyles.navlist}
        })
    }

    return (
        <nav className={navStyles.navbar}>
            <div className={navStyles.float}>
                <p className={navStyles.logo}>Tyler Baker</p>
                <FaBars className={navStyles.bars} onClick={handleClickBurger}/>
            </div>
            <ul className={clicked.style}>
                <li className={navStyles.navItem}><Link href='/'>Home</Link></li>
                <li className={navStyles.navItem}><Link href='/blog'>Blog</Link></li>
                <li className={navStyles.navItem}><Link href='/portfolio'>Portfolio</Link></li>
                <li className={navStyles.navItem}><Link href='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
