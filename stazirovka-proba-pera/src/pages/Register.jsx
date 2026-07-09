import {Link} from 'react-router-dom'
import './Auth.css'

function Register(){
    return (
        <main className='auth-page'>
            <form className='auth-card'>
                <h1>Регистрация</h1>
                <p>Создать новый аккаунт</p>

                <label>
                    Имя
                    <input type='text' placeholder='Введите ваше имя'/>
                </label>

                <label>
                    Телефон
                    <input type='tel' placeholder='Введите номер телефона'/>
                </label>

                 <label>
                    Пароль
                    <input type='passsword' placeholder='Введите пароль'/>
                </label>

                <label>
                    Повтор пароля
                    <input type='passsword' placeholder='Повторно введите пароль'/>
                </label>


                <button type='submit'>Зарегистрироваться</button>

                <p className='auth-bottom'>
                    Уже есть аккаунт? <Link to='/login'>Войти</Link>
                </p>
            </form>
        </main>
    )
}

export default Register