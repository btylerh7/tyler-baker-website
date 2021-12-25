import mainStyles from '../styles/Main.module.css'

function Main({children}) {
    return (
        <div className={mainStyles.container}>
            {children}
        </div>
    )
}

export default Main
