'use client'

import { useRouter } from 'next/navigation'
import Styles from './page.module.css'

export default function Begin() {
  const router = useRouter();
  return (
    <div className={Styles.main}>
      <div className={Styles.begin_container}>
        <h1>Добро пожаловать в RuStore! Откройте для себя мир российских приложений</h1>
        <button className={Styles.begin_button} onClick={() => {
          router.push('/');
          localStorage.setItem('begin', true);
          }}>Начать!</button>
      </div>
    </div>
  )
}