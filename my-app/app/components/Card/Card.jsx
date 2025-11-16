import Styles from './Card.module.css'

export const Card = (props) => {
    return (
    <div className={Styles.card_container}>
        <div className={Styles.img_container}>
            <img src={props.icon} alt="" />
        </div>
        <div className={Styles.information_container}>
            <p className={Styles.score}>⭐{ props.score }</p>
            <div className={Styles.name_container}>
                <h3>{ props.name }</h3>
                <p>{ props.description.slice(0, 80) }...</p> 
            </div>
        </div>
    </div>
    )
}