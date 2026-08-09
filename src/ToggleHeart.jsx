import { useState } from "react";

function ToggleHeart(){
    const [heart,onChangeHeart] = useState(false);
    const [increment,onIncrement] = useState(0);
    const handleClick = ()=>{
                onChangeHeart(!heart);
                if(heart){
                    onIncrement(increment-1);
                }else{
                    onIncrement(increment+1);
                }
            }
    return(
        <div>
            <button onClick={handleClick}>
                {heart?'❤︎':'♡'}⁠
                <span>{increment}</span>
            </button>
        </div>
    );
}
export default ToggleHeart;