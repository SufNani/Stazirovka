import {Link} from 'react-router-dom'
import './Header.css'
function Header(){
    return(
        <header className="header">
            <Link to='/' className='logo'>
                <span>КалендАрт</span>
            </Link>

            <nav>
                <Link to='/catalog'>Каталог</Link>
                <a href='#collection'>Подборки</a>
                <a href='#contacts'>Контакты</a>
            </nav>

            <div className='header-actions'>
                <Link to='/login' className='login'>
                    Вход
                </Link>

                <Link to='/register' className='sign-up'>
                    Регистрация
                </Link>
            </div>
        </header>
    )
}

export default Header