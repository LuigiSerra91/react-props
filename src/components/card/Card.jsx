import imgCard from '../../assets/img/img6.png'
import style from '../card/App.module.css';
export default function Card() {
    return (
        <div className={style.card}>
            <img src={imgCard} alt="" />
            <div className={style.details}>
                <h3>titolo del post</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, sed quibusdam! Eveniet architecto omnis asperiores itaque laboriosam, repellendus adipisci laudantium!</p>
                <button className={style.btn}>Leggi di più</button>
            </div>

        </div>

    )
}