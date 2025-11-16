import Styles from './CategoriesList.module.css'
import Link from 'next/link'

export const CategoriesList = (props) => {
    const colors = ['red', 'green', 'blue', 'yellow', 'grey', 'lasur']

    const id_categories =  {
        "финансы": 1,
        "игры": 2,
        "государственное": 3,
        "транспорт": 4,
        "инструменты": 5
    }

    return (
        <ol className={Styles.list}>
            {
                props.cats.map((item, index) => {
                    return (
                    <li key={index}>
                        <Link href={`/categories/${id_categories[item]}`}><button className={`${Styles.category} ${Styles[colors[index]]}`}>{item}</button></Link>
                    </li>
                    )
                })
            }
        </ol>
    )
}