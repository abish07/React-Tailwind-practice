import { useGame } from "../GameContext";

function Home(){
    const { counter, level, increment, handleIncrement } = useGame();
    return (
        <div className="flex flex-col gap-20 items-center justify-center mt-10">
            <h1>Level: {level}</h1>
            <p>Point: {increment}</p>
            <div className="flex items-center gap-4">
                <button className="border-2 p-2 bg-red-400 text-white font-bold text-xl hover:border-blue-400 cursor-pointer w-10" onClick={()=>handleIncrement("decrease")}>-</button>
                <span className="font-bold text-xl text-rose-400">{counter}</span>
                <button className="border-2 p-2 bg-green-400 text-white font-bold text-xl hover:border-orange-400 cursor-pointer w-10" onClick={()=>handleIncrement("increase")}>+</button>
            </div>
        </div>
    );
}
export default Home;