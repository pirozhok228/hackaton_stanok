import Styles from './CardList.module.css'
import { Card } from '../Card/Card'
import Link from 'next/link'

export const CardList = (props) => {
    return (
        <ol className={Styles.container}>
            {
                props.apps.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href={`/apps/${item.app_id}`}><Card name={item.name} description={item.description} icon={item.icon} score={item.score} /></Link>
                        </li>
                    )
                })
            }
        </ol>
    )

}