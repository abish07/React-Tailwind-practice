import logo from './assets/react.svg'

const Navlinks = [
    {id:1,name:"Home",href:"#"},
    {id:2,name:"About Us",href:"#"},
    {id:3,name:"Services",href:"#"},
    {id:4,name:"Contact Us",href:"#"}
];
function Nav2(){
    return(
        <nav className="flex items-center justify-between px-[40vh] py-8 bg-slate-900 text-gray-300">
            <div className=''>
                <a href="#"><img src={logo} alt="" /></a>
            </div>
            <ul className="flex gap-7">
                {Navlinks.map(link=>(
                    <li key={link.id}>
                        <a href={link.href} className='transition-colors duration-300 hover:text-rose-600'>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
export default Nav2