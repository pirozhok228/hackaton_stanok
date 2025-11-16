'use client'

import { useRouter } from "next/navigation";
import { Header } from "./components/Header/Header";
import { CategoriesList } from "./components/CategoriesList/CategoriesList";
import { NewApps } from "./components/NewApps/NewApps";
import { CardList } from "./components/CardList/CardList";
import { useState, useEffect } from "react";

export default function Home() {
  // const router = useRouter();
  // if (localStorage.getItem('begin') === null) {
  //   router.push('/begin')
  // }

  const [apps, setApps] = useState(null)

  const get_apps = async() => {
        const res = await fetch('http://localhost:8080/get_apps')
        const data = await res.json()
        console.log(res)
        console.log(data)
        setApps(data.apps)
  }

  const [cats, setCats] = useState(null)
    
      const get_categories = async() => {
            const res = await fetch('http://localhost:8080/get_categories')
            const data = await res.json()
            setCats(data.categories)
      }

    useEffect( () => {
        get_apps()
        get_categories()
    }, [])

    console.log(apps)
  return (
    <>
      <Header />
      <NewApps />
      {cats ? <CategoriesList cats={cats} /> : <h1> Загрузка...</h1>}
      {apps ? <CardList apps={apps} /> : <h1>Загрузка...</h1>}
    </>
  )
}
