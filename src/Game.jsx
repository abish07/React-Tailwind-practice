import { useState } from "react";

function Game(){
    let [counter,onChange] = useState(0);
    
    return(
        <div className="flex items-center justify-center gap-3 mt-8">
            <button className="border-2 p-2" onClick={()=>onChange(--counter)}>-</button>
            <span>{counter}</span>
            <button className="border-2 p-2" onClick={()=>onChange(++counter)}>+</button>
        </div>
    );
}
export default Game;