
import abish from "./assets/abish_pp.jpg"
import luffy from "./assets/Luffy.jpg"
import lambo from "./assets/lambo.jpg"
import durbar from "./assets/durbar.jpg"

const data = [
    {id:1,name:"Abish",img:abish},
    {id:2,name:"Luffy",img:luffy},
    {id:3,name:"Car",img:lambo},
    {id:4,name:"Wallpaper",img:durbar}
];
function Component(){
    return(
        <div className="flex items-center justify-center p-10 gap-10 text-center text-rose-900 text-xl">
            {data.map(element=>(
                <div className="p-10">
                    <img className="w-64 h-64 object-cover rounded" src={element.img} alt={element.name} />
                    <h5 className="pt-5">{element.name}</h5>
                </div>
            ))}
        </div>
    );
}
export default Component