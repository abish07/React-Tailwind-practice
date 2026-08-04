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
  return (
    <div className="dark">
      <nav className="flex items-center justify-between py-8  shadow-md bg-slate-900 text-slate-300 text-xl">
        <div className="pl-10 ">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="flex gap-20 pr-30">
          <div className="hidden sm:flex gap-20">
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
            <div className="flex flex-col w-full text-center p-6 bg-slate-700 sm:hidden">
              {navData.map((elements) => (
                <li className={`flex flex-col justify-center ${elements.bgcolor} text-slate-900 h-10 hover:bg-slate-900 hover:text-slate-100`}>
                  <a href={elements.href}>{elements.name}</a>
                </li>
              ))}
            </div>
          )}
    </div>
  );
}
export default ResponsiveNav;
