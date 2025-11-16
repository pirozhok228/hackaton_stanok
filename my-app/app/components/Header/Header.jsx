'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Styles from './Header.module.css'
import { ST } from 'next/dist/shared/lib/utils'

export const Header = () => {
    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            e.key === 'Escape' && setSearch(false);
        })
    }, [])

    const router = useRouter();
    const [search, setSearch] = useState(false);
    return (
        search ? 
        <header className={Styles.header}>
            <button className={Styles.search} type="image" onClick={() => setSearch(!search)}><img src="images/search.png" alt="" /></button>
            <input className={Styles.input} placeholder='Поиск...' />
        </header>
        :
        <header className={Styles.header}>
            <button className={Styles.search} type="image" onClick={() => setSearch(!search)}><img src="images/search.png" alt="" /></button>
            <nav className={Styles.navigation}>
                {
                    window.location.pathname === '/' ? 
                    <button className={`${Styles.btn_activated} ${Styles.btn}`} onClick={() => router.push('/')}>Обзор</button>
                    : 
                    <button className={Styles.btn} onClick={() => {router.push('/'); router.refresh()}}>Обзор</button>
                }
                {
                    window.location.pathname === '/downloads' ? 
                    <button className={`${Styles.btn_activated} ${Styles.btn}`} onClick={() => router.push('/downloads')}>Установлено</button>
                    : 
                    <button className={Styles.btn} onClick={() => {router.push('/downloads'); router.refresh()}}>Установлено</button>
                }
                {
                    window.location.pathname === '/updates' ? 
                    <button className={`${Styles.btn_activated} ${Styles.btn}`} onClick={() => router.push('/updates')}>Обновления</button>
                    : 
                    <button className={Styles.btn} onClick={() => {router.push('/updates'); router.refresh()}}>Обновления</button>
                }
            </nav>
            <button className={Styles.user} onClick={() => router.push('/auth')}>Войти</button>
        </header>
    )
}