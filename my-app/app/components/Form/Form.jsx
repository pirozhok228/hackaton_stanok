import Styles from './Form.module.css'

export const Form = (props) => {
    if (props.action === 'auth') {
        return (
        <main className={Styles.main}>
            <div className={Styles.login_container}>
                <h2>Вход</h2>
                <form action="#" method="POST">
                    <div className={Styles.input_group}>
                        <label>Логин</label>
                        <input type="text" id="login" name="login" required />
                    </div>
                    <div className={Styles.input_group}>
                        <label>Пароль</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className={Styles.login_button}>Войти</button>
                </form>
            </div>
        </main>
    )
    }
    else if (props.action === 'reg') {
        return (
        <main className={Styles.main}>
            <div className={Styles.login_container}>
                <h2>Регистрация</h2>
                <form action="#" method="POST">
                    <div className={Styles.input_group}>
                        <label>Имя пользователя</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className={Styles.input_group}>
                        <label>Дата рождения</label>
                        <input type="data" id="birthday" name="birthday" required />
                    </div>
                    <div className={Styles.input_group}>
                        <label>Логин</label>
                        <input type="text" id="login" name="login" required />
                    </div>
                    <div className={Styles.input_group}>
                        <label>Пароль</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className={Styles.login_button}>Зарегестрироваться</button>
                </form>
            </div>
        </main>
    )
    }
    
}