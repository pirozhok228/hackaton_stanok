'use client'

import { useParams } from "next/navigation"
import Styles from './page.module.css'
import { useState, useEffect } from "react"

export default function AppPage() {
    const [apps, setApps] = useState(null)
    const get_apps = async() => {
        const res = await fetch('http://localhost:8080/get_apps')
        const data = await res.json()
        console.log(res)
        console.log(data)
        setApps(data.apps)
    }

    useEffect(() => { get_apps() }, [])

    console.log(apps)

    const params = useParams();
    const id = Number(params.id)
    let app;
    if (apps) {
        app = apps.find((item) => item.app_id === id)
    }
    console.log(app)
    return (
        <main>
            {apps ? 
            <>
            <div className={Styles.container}>
                <div className={Styles.app}>
                    <div className={Styles.icon}>
                        <img src={`${app.icon}`} />
                    </div>
            
                    <div className={Styles.information}>
                        <h1>{app.name}</h1>
                        <p>Категория: {app.category}</p>
                        <p>Автор: {app.author}</p>
                        <p>⭐{app.score}</p>
                    </div>
                </div>
                <div className={Styles.download}>
                    <button className={Styles.btn_download}>Установить</button>
                </div>
            </div>
            <div className={Styles.pictures}>
                <img src={`${app.images[0]}`} alt="" />
            </div>
            </>
        :
        <h1>Загрузка...</h1>}
        </main>
    )
}