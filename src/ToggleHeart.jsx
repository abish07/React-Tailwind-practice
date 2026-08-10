import { useState } from "react";

// function ToggleHeart(){
    // const [heart,onChangeHeart] = useState(false);
    // const [increment,onIncrement] = useState(0);
    // const handleClick = ()=>{
    //             onChangeHeart(!heart);
    //             if(heart){
    //                 onIncrement(increment-1);
    //             }else{
    //                 onIncrement(increment+1);
    //             }
    //         }
    // return(
    //     <div>
    //         <button onClick={handleClick}>
    //             {heart?'❤︎':'♡'}⁠
    //             <span>{increment}</span>
    //         </button>
    //     </div>
    // );
// }
// function CharacterCounter(){
//     const [text,onType] = useState('');
//     const handleChange = (e)=>{
//         onType(e.target.value)
//     };
//     return(
//         <div>
//             <input type="text" value={text} className="border-1" onChange={handleChange}/>
//             <p>{text}</p>
//         </div>
//     ) ;
// }

function NamePreview(){
    const [savedName,setSavedName] = useState('');
    const [click,onClick] = useState(false);
    const [name,setName] = useState('');
    const handleName = (e) =>{
        setName(e.target.value)
    }

    return(
        <div>
            <div className="flex gap-2">
                <input type="text" value={name} onChange={handleName} className="border-2"/>
                <button type="submit" className="border-2" onClick={()=>onClick(true,setSavedName(name))}>Send</button>
            </div>
            <div>
                {click &&(
                    <h1>Hello! {savedName}</h1>
                    )
                }
            </div>
        </div>
    )
}
// export default ToggleHeart;
// export default CharacterCounter;
export default NamePreview;