import React from 'react';
import remove from "../img/close.svg";
import airMax from "../img/sneakers/air-max-270.jpg";
import Arrow from "../img/arrow.svg";


const Drawer = () => {
    return (
        <div style={{display:"none"}} className="overlay">
        <div className="drawer">

            <h2>Корзина <img src={remove} alt=""/></h2>
            <div className="items">
                <div className="drawer_contain">
                    <div className="cartItem">
                        <div className="cartItemImg" style={{backgroundImage:`url(${airMax})`}}></div>
                        <div className="cartInfo">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src={remove} alt="Remove"/>
                    </div>
                </div>
                <div className="drawer_contain">
                    <div className="cartItem">
                        <div className="cartItemImg" style={{backgroundImage:`url(${airMax})`}}></div>
                        <div className="cartInfo">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src={remove} alt="Remove"/>
                    </div>
                </div>
                <div className="drawer_contain">
                    <div className="cartItem">
                        <div className="cartItemImg" style={{backgroundImage:`url(${airMax})`}}></div>
                        <div className="cartInfo">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src={remove} alt="Remove"/>
                    </div>
                </div>
            </div>

            <div className="carTotalBlock">
                <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 490</b></li>
                    <li><span>Доставка:</span>
                        <div></div>
                        <b>1074</b></li>
                </ul>
                <button className="greenButton">Оформить заказ <img src={Arrow} alt="Arrow"/> </button>
            </div>
        </div>
    </div>
    );
};

export default Drawer;