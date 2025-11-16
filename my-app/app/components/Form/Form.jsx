'use client'

import Styles from './Form.module.css'
import Link from 'next/link'
import { useState } from 'react'

export const Form = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [birthday, setBirthday] = useState("");

    const authorize = async() => {
        const user = {
            login: login,
            password: password
        }
        const userJSON = JSON.stringify(user);
        const res = await fetch('http://localhost:8080/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: userJSON
        })
        const status = await res.json();
    }

    const register = async() => {
        const user = {
            login: login,
            password: password,
            username: username,
            birthday: birthday
        }
        const userJSON = JSON.stringify(user);
        const res = await fetch('http://localhost:8080/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: userJSON
        })
        const status = await res.json();
        console.log(status);
    }

    if (props.action === 'auth') {
        return (
        <main className={Styles.main}>
            <div className={Styles.login_container}>
                <h2>Вход</h2>
                <form action="#" method="POST">
                    <div className={Styles.input_group}>
                        <label>Логин</label>
                        <input type="text" id="login" name="login" onChange={(e) => {setLogin(e.target.value)}} required />
                    </div>
                    <div className={Styles.input_group}>
                        <label>Пароль</label>
                        <input type="password" id="password" name="password" onChange={(e) => {setPassword(e.target.value)}} required />
                    </div>
                    <button type="button" className={Styles.login_button} onClick={authorize}>Войти</button>
                    <Link href="/reg" className={Styles.link}>Нет аккаунта? Зарегестрируйтесь</Link>
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
                <form action="" method="POST">
                    <div className={Styles.input_group}>
                        <label>Имя пользователя</label>
                        <input type="text" id="username" name="username" onChange={(e) => {setUsername(e.target.value)}} required />
                    </div>
                    <div className={Styles.input_group}>
                        <label>Дата рождения</label>
                        <input type="data" id="birthday" name="birthday" onChange={(e) => {setBirthday(e.target.value)}} required />
                    </div>
                    <div className={Styles.input_group}>
                        <label>Логин</label>
                        <input type="text" id="login" name="login" onChange={(e) => {setLogin(e.target.value)}} required />
                    </div>
                    <div className={Styles.input_group}>
                        <label>Пароль</label>
                        <input type="password" id="password" name="password" onChange={(e) => {setPassword(e.target.value)}} required />
                    </div>
                    <button type="button" className={Styles.login_button} onClick={register}>Зарегестрироваться</button>
                </form>
            </div>
        </main>
    )
    }
    
}