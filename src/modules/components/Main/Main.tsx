import style from './Main.module.css'
import logo from '../../../assets/imgs/Logo.svg'


const Main: React.FC = () => {

    return (
        <div className={style.frame}>
            <img className={style.logo} src={logo} alt='logo'></img>
        </div>
    )
}

export default Main