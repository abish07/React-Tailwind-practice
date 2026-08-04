import { useState } from 'react';   
import navbar from './assets/menu.png';
import logo from './assets/react.svg'
const navData = [
    {name:'Home',href:"#"},
    {name:'About Us',href:"#"},
    {name:'Services',href:"#"},
    {name:'Contact Us',href:"#"}
]
function ResponsiveNav(){
    return(
        <nav className='flex items-center justify-between py-8 px-[40vh] shadow-md bg-slate-900 text-slate-300 text-xl'>
            <div className="">
                <img src={logo} alt="Logo" />
            </div>
            <ul className='flex gap-20'>
                {navData.map(elements=>(
                    <li key={elements.name} className='hover:scale-120 hover:text-rose-700 transition duration-300'><a href={elements.href}>{elements.name}</a></li>
                ))}
                <div>
                    <button className="btn"><img className='w-7 h-auto p-1 bg-slate-300 cursor-pointer' src={navbar} alt="Menu"/></button>
                </div>
            </ul>
        </nav>
    );
}
export default ResponsiveNav