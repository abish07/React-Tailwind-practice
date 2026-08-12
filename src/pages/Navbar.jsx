import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div className="bg-slate-900 text-slate-100">
            <div className="flex items-center justify-between mx-[40vh] bg-slate-800 px-15">
                <ul>
                    <li><Link className="cursor-pointer hover:bg-slate-700 transition ease-in-out duration-300 px-2 py-4 inline-block" to="/">Game</Link></li>
                </ul>
                <ul className="flex gap-15">
                    <li><Link className="cursor-pointer hover:bg-slate-700 transition ease-in-out duration-300 px-2 py-4 inline-block" to="/">GameZone</Link></li>
                    <li><Link className="cursor-pointer hover:bg-slate-700 transition ease-in-out duration-300 px-2 py-4 inline-block" to="/products">Buy Products</Link></li>
                    <li><Link className="cursor-pointer hover:bg-slate-700 transition ease-in-out duration-300 px-2 py-4 inline-block" to="/cart">🛒 Carts</Link></li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;