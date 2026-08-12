import { createContext, useContext, useState } from "react";

function getLevelInfo(counter){
    if(counter>=1000) return {level:'max',increment:20002000};
    if(counter>=750) return {level:3,increment:100000};
    if(counter>=5) return {level:2,increment:500};
    return {level:1,increment:1};
}

const GameContext = createContext(null);

export function GameProvider({ children }) {
    let [counter, setCounter] = useState(0);
    let [cart, setCart] = useState([]);
    let { level, increment } = getLevelInfo(counter);

    function handleIncrement(type){
        setCounter(prev => type === "increase" ? prev + increment : prev - 1);
    }

    function handleCart(product){
        if(counter >= product.price){
            setCart(prev => [...prev, product]);
            setCounter(prev => prev - product.price);
        } else {
            alert(`No sufficient points to purchase item`);
        }
    }

    return (
        <GameContext.Provider value={{ counter, level, increment, cart, handleIncrement, handleCart }}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
    return useContext(GameContext);
}