import Styles from './CategoriesList.module.css'

export const CategoriesList = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'grey', 'lasur']
    return (
        <div className={Styles.list}>
            <button className={`${Styles.category} ${Styles[colors[0]]}`}>💰Финансы</button>
            <button className={`${Styles.category} ${Styles[colors[1]]}`}>🛠️Инструменты</button>
            <button className={`${Styles.category} ${Styles[colors[2]]}`}>🎮Игры</button>
            <button className={`${Styles.category} ${Styles[colors[3]]}`}>🚌Транспорт</button>
            <button className={`${Styles.category} ${Styles[colors[4]]}`}>🏛️Государственные</button>
            <button className={`${Styles.category} ${Styles[colors[5]]}`}>👨🏻‍💻Разработка</button>
        </div>
    )
}