import React from 'react';
import grey_love from "../img/grey_love.svg";
import plus from "../img/plus.svg";
import style from "../components/styled/card.module.scss";

const Card = (props) => {

    return (
        <div className={style.cards}>
            <div className={style.like}>
                <img src={grey_love} alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.img} alt=""/>
            <h5>{props.title}</h5>
            <div className={style.cardBottom}>
                <div className={style.cardInfo}>
                    <span>Цена</span>
                    <b>{props.price} руб.</b>
                </div>
                <button ><img width={11} height={11} src={plus} alt="Добавить"/></button>
            </div>
        </div>
    );
};

export default Card;