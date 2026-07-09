import {Link} from 'react-router-dom'
import './Auth.css'

function Login(){
    return (
        <main className='auth-page'>
            <form className='auth-card'>
                <h1>Вход в аккаунт</h1>
                <p>Добро пожаловать!</p>

                 <label>
                    Телефон
                    <input type='tel' placeholder='Введите номер телефона'/>
                </label>

                <label>
                    Пароль
                    <input type='password' placeholder='Введите пароль'/>
                </label>

                <button type='submit'>Войти</button>

                <link to='/register' className='auth-link'>
                    Забыли пароль?
                </link>

                <link to='/register' className='auth-button'>
                    Зарегистрироваться
                </link>
            </form>
        </main>
    )
}

export default Login