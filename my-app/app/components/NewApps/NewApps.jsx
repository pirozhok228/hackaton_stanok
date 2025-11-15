'use client'

import { useState } from 'react'
import Styles from './NewApps.module.css'

export const NewApps = () => {
    const [page, setPage] = useState(1);
    return (
        <div className={Styles.container}>
            <button onClick={() => setPage(page - 1)}> {"<"} </button>
            <p>Приложение { page }</p>
            <button onClick={() => setPage(page + 1)}> {">"} </button>
        </div>
    )
}