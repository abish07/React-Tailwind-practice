import { useEffect, useState } from "react";

function Game(){
    let [counter,onChange] = useState(0);
    let [increment,onIncrement] = useState(1);
    let [level,setLevel] = useState(0);

    function handleIncrement(type){
        if(type=='increase')
            onChange(counter+increment)
        else    
            onChange(counter-increment)
    }
    function handleLevel(){
        if(counter>=100){
            increment==20
            level = 'max';
            onIncrement(increment);
            setLevel(level);
        }
        else if(counter>=75){
            increment=10;
            level = 3;
            onIncrement(increment);
            setLevel(level);
        }
        else if(counter>=35){
            increment = 5;
            level = 2;
            onIncrement(increment);
            setLevel(level);
        }
        else{
            increment=1;
            level=1;
            onIncrement(increment);
            setLevel(level);
        }
    }
    useEffect(()=>{
        handleLevel()
    },[counter])
    return(
        <div className="flex items-center justify-center gap-3 mt-8">
            <h1>Level: {level}</h1>
            <p>Point: {increment}</p>
            <button className="border-2 p-2" onClick={()=>handleIncrement("decrease")}>-</button>
            <span>{counter}</span>
            <button className="border-2 p-2" onClick={()=>handleIncrement("increase")}>+</button>
        </div>
    );
}
export default Game;