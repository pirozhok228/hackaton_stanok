'use client'

import { Header } from "@/app/components/Header/Header";
import { CardList } from "@/app/components/CardList/CardList";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Cat() {
    const id_categories =  {
        1: "финансы",
        2: "игры",
        3: "государственное",
        4: "транспорт",
        5: "инструменты"
    }

    const params = useParams();
    const [apps, setApps] = useState()

    const get_recomendations = async(jwt) => {
        const res = await fetch(`http:localhost:8080/get_recommend?jwt=${jwt}`)
        const data = await res.json()
        setApps(data)
    }

    
    const get_apps = async() => {
        const res = await fetch('http://localhost:8080/get_apps')
        const data = await res.json()
        console.log(id_categories[params.cat] === data.apps[0].category_name)
        const list_apps = data.apps.find((item) => {id_categories[params.cat] === item.category_name})
        setApps(list_apps)
        console.log(apps);
  }

    useEffect(() => {
        if (params.cat === 'recomendations') {
            get_recomendations(jwt);
        }
        else {
            get_apps()
        }
    })

    return (
        <>
        <Header />
        {apps ? <CardList apps={apps} /> : <h1>Загрузка...</h1>}
        </>
    )
}