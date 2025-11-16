import Data from '@/rustore_full_apps.json'
import Styles from './CardList.module.css'
import { Card } from '../Card/Card'

export const CardList = () => {
    const apps = Data.apps.slice(0, 20)
    console.log(apps)
    return (
        <ol className={Styles.container}>
            {
                apps.map((item, index) => {
                    return (
                        <li key={index}>
                            <Card name={item.name} description={item.description} icon={item.icon} score={item.score} />
                        </li>
                    )
                })
            }
        </ol>
    )

}