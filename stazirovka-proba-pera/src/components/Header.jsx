import './Header.css'
function Header(){
    return(
        <header className="header">
            <div className="logo">
                <img src=""></img>
                <h1></h1>
            </div>

            <nav className="nav">
                <a href='#'>Каталог</a>
                <a href='#'>Подборки</a>
                <a href='#'>Контакты</a>
            </nav>

            <button className="login">Вход</button>
            <button className="sign_up">Регистрация</button>
        </header>
    )
}

export default Header