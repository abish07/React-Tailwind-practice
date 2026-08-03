function Nav(){
    return(
        <nav className="flex items-center justify-between px-90 py-10 bg-stone-300">
            <div className="flex gap-[100px] text-xl">
                <div className="font-bold">Logo</div>
                <ul className="flex gap-9 text-rose-900">
                    <li>Products</li>
                    <li>Solutions</li>
                    <li>Developers</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                </ul>
            </div>     
            <div className="flex gap-5">
                <button className="border-2 p-2 bg-stone-200 cursor-pointer"><span className="text-rose-800">Sign In</span></button>
                <button className="border-2 p-2 bg-indigo-400 cursor-pointer">Contact sales</button>
            </div>
        </nav>
    );
}
export default Nav