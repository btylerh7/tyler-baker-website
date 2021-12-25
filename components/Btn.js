import Link from 'next/link'
import btnStyles from '../styles/Btn.module.css'
function Btn() {
    return (
        <div className={btnStyles.blueBtn}>
            <Link href="/portfolio">Portfolio</Link>
        </div>
    )
}

export default Btn
