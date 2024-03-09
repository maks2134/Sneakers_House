import './app.scss'
import Logo from "./img/Logo.png"
import plus from "./img/plus.svg"
import blazer from "./img/sneakers/Blazer.jpg"
import airMax from "./img/sneakers/air-max-270.jpg"
import armorCurry from "./img/sneakers/armor-curry.jpg"
import flytrap from "./img/sneakers/flytrap.jpg"
import futureRide from "./img/sneakers/future-rider.jpg"
import jordan from "./img/sneakers/jordan11.jpg"
import search from "./img/Search.svg"
import kyrie from "./img/sneakers/kyrie-7.jpg"
import grey_love from "./img/grey_love.svg"
import red_group from "./img/red_love.svg"
import plus_liked from "./img/plus-liked.svg"
import remove from "./img/close.svg"
import Arrow from "./img/arrow.svg"
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
function App() {

    const arr = [
        {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: '12999', img: blazer},
        {name: "Мужские Кроссовки Nike Air Max 270", price: '15 600', img: airMax},
        {name: "Мужские Кроссовки Under Armour Curry 8 ", price: '15 199', img: flytrap},
        {name: "Мужские Кроссовки Nike Kyrie Flytrap IV", price: '11 299', img: futureRide},
        {name: "Мужские Кроссовки Jordan Air Jordan 11 ", price: '10 799', img: jordan},
        // {name: "Мужские Кроссовки Nike Kyrie 7 ", price: '11 299', img: kyrie},
        // {name: "Мужские Кроссовки Under Armour Curry 8", price: '15 199', img: armorCurry},
    ];

    return (
        <div className="wrapper">

            <Drawer/>


            <Header/>
            <div className="content">
                <div className="content-info">
                <h1>Все кроссовки</h1>
                <div className="search-block">
                    <img src={search} alt="search"/>
                    <input placeholder="Поиск"/>
                </div>
                </div>
                <div className="sneakers">
                    {arr.map((obj)=> {
                       return <Card title = {obj.name} price = {obj.price} img = {obj.img}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
