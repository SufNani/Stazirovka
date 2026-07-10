import {Link, useNavigate} from 'react-router-dom'
import './Auth.css'



function Login(){
    const navigate=useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        navigate('/organizer')
    }

    return (
        <div className='auth-page'>

           <div className='auth-container'>
                <h1>Вход в аккаунт</h1>

                <p className='subtitle'>
                    Добро пожаловать!
                </p>

                <form onSubmit={handleSubmit}>

                    <div className='input-group'>

                        <label>Телефон</label>

                        <input
                        type='tel'
                        placeholder='Введите номер'
                        />

                    </div>

                    <div className='input-group'>
                        <label>Пароль</label>
                            <input 
                            type='password'
                            placeholder='Введите пароль'
                            />

                    </div>

                    <button className='login-btn'>
                        Войти
                    </button>
                </form>

                <Link
                    to='/forgot'
                    className='forgot-password'
                >
                    Забыли пароль?
                </Link>

                <Link
                to='/register'
                className='register-btn'
                >
                    Зарегистрироваться
                </Link>
           </div>
        </div>
    );
}

export default Login