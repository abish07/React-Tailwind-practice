import { useState } from "react";
import navbar from "./assets/menu.png";
import logo from "./assets/react.svg";
const navData = [
  { name: "Home", href: "#" ,bgcolor:"bg-rose-500"},
  { name: "About Us", href: "#" ,bgcolor:"bg-lime-600"},
  { name: "Services", href: "#" ,bgcolor:"bg-gray-100"},
  { name: "Contact Us", href: "#" ,bgcolor:"bg-orange-300"},
];
function ResponsiveNav() {
  const [open, setOpen] = useState(false);
  const [theme,setTheme] = useState("light");
  return (
    <div className={theme}>
      <nav className="flex items-center justify-between py-8 text-xl bg-slate-100 dark:bg-slate-900 text-white">
        <div className="pl-10 ">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="flex gap-20 pr-30 text-slate-900 dark:text-white">
          <div className="hidden sm:flex gap-20">
            <button className="cursor-pointer bg-slate-400 ph-3 rounded " onClick={()=> setTheme(theme==="light"?"dark":"light")}>{theme==="light"?"☾":"🌞"}</button>
            {navData.map((elements) => (
              <li
                key={elements.name}
                className="hover:scale-120 hover:text-rose-700 transition duration-300"
              >
                <a href={elements.href}>{elements.name}</a>
              </li>
            ))}
          </div>
          <div className="sm:hidden">
            <img
              className="w-7 h-auto p-1 bg-slate-300 cursor-pointer"
              onClick={() => setOpen(!open)}
              src={navbar}
              alt="Menu"
            />
          </div>
        </ul>
      </nav>
        {open && (
            <div className="flex flex-col gap-4 w-full text-center p-6 bg-slate-100 dark:bg-slate-900 sm:hidden">
              {navData.map((elements) => (
                <li className={`flex flex-col justify-center h-10 bg-gray-400 text-gray-900 dark:bg-gray-800 dark:text-slate-100`}>
                  <a href={elements.href}>{elements.name}</a>
                </li>
              ))}
            </div>
          )}
    </div>
    //watched tutorial of implementing dark and light mode.
  );
}
export default ResponsiveNav;
