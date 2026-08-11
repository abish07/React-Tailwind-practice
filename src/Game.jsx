import { useEffect, useState } from "react";
import Earphone from './assets/earphone.jpg';
import Laptop from './assets/laptop.jpeg';
import Cpu from './assets/cpu.jpeg';
import Keyboard from './assets/keyboard.jpeg';
import Speaker from './assets/speaker.jpg';
import Iphone from './assets/iphone.jpg';
import Headset from './assets/headset.jpg';
import Airpods from './assets/airpods.jpeg';


function getLevelInfo(counter){
    if(counter>=100) return {level:'max',increment:20};
    if(counter>=75) return {level:3,increment:10};
    if(counter>=25) return {level:2,increment:5};
    return {level:1,increment:1};
}
const products = [
    {id:1,Name:"HeadSet",image:Headset,price:1500},
    {id:2,Name:"Keyboard",image:Keyboard,price:2500},
    {id:3,Name:"Speaker",image:Speaker,price:3300},
    {id:4,Name:"Air Pods",image:Airpods,price:1750},
    {id:5,Name:"Iphone 16",image:Iphone,price:120500},
    {id:6,Name:"Earphone",image:Earphone,price:900},
    {id:7,Name:"Laptop",image:Laptop,price:289999},
    {id:8,Name:"CPU",image:Cpu,price:370000}
];
function Game(){
    let [counter,setCounter] = useState(0);
    let {level,increment} = getLevelInfo(counter);
    let [cart,setCart] = useState([]);

    function handleIncrement(type){
        setCounter(prev=> type=='increase'? prev+increment: prev-increment );
    }   
    return(
        <div className="flex flex-col items-center justify-center gap-3 mt-8">
            <div className="grid grid-cols-3 gap-10">
                {products.map((items)=>(
                    <div className="flex flex-col items-center" key={items.id}>
                        <h1 className="font-bold text-xl text-rose-800 mb-6">{items.Name}</h1>
                        <img className="w-[200px] h-[200px] object-cover" src={items.image} alt={items.Name} />
                        <div className="flex mt-6">
                            <p className="p-3 mr-3 bg-slate-200">Price: <span>{items.price}</span></p>
                            <button className="bg-orange-300 p-3 cursor-pointer hover:bg-orange-600 transition ease-in-out duration-400">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h1>Level: {level}</h1>
                <p>Point: {increment}</p>
                <button className="border-2 p-2" onClick={()=>handleIncrement("decrease")}>-</button>
                <span>{counter}</span>
                <button className="border-2 p-2" onClick={()=>handleIncrement("increase")}>+</button>
            </div>
        </div>
    );
}
export default Game;