'use client'

import { useState } from 'react'
import Styles from './NewApps.module.css'
import Data from '@/rustore_full_apps.json'

function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

const appList = [];
for (let i = 0; i < 5; i++) {
        appList.push(getRandomInt(1, 1000))
}

export const NewApps = () => {
    const [page, setPage] = useState(0);
    const nextPage = () => {
        if (page === appList.length - 1) {
            setPage(0)
        }
        else {
            setPage(page + 1)
        }
    }
    const lastPage = () => {
        if (page === 0) {
            setPage(appList.length - 1)
        }
        else {
            setPage(page - 1)
        }
    }
    console.log(Data.apps[appList[page]])
    console.log(page)
    return (

        <div className={Styles.container}>
            <div className={Styles.app_container}>
                <button onClick={lastPage}> ◁ </button>
                <div className={Styles.app}>
                    <img src={`${Data.apps[appList[page]].icon}`}></img>
                    <p>{Data.apps[appList[page]].name}</p>
                    <p>⭐{Data.apps[appList[page]].score}</p>
                </div>
            <button onClick={nextPage}> ▷ </button>
            </div>
            <div className={Styles.pagination}>
                <div className={`${Styles.circle} ${page === 0 && Styles.circle_white}`}></div>
                <div className={`${Styles.circle} ${page === 1 && Styles.circle_white}`}></div>
                <div className={`${Styles.circle} ${page === 2 && Styles.circle_white}`}></div>
                <div className={`${Styles.circle} ${page === 3 && Styles.circle_white}`}></div>
                <div className={`${Styles.circle} ${page === 4 && Styles.circle_white}`}></div>
            </div>
        </div>
    )
}