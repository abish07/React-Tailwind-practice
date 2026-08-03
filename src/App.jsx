import logo from "./assets/react.svg";

function App() {

  return (
    // <div className="flex  items-center justify-between  text-white bg-slate-500 p-4">
    //   <div className="font-bold">Logo</div>
    //   <div className="flex flex-col gap-4">
    //     <span>Home</span>
    //     <span>About Us</span>
    //     <span>Services</span>
    //     <span>Contact Us</span>
    //   </div>
    // </div>
    <div className="flex items-center justify-between p-10 text-xl bg-slate-600 ">
        <div>
          <img src={logo} alt="ogo" className="w-10 h-10"/>
        </div>
        <div>
          <ul  className="flex gap-10 text-slate-20 shadow-md ">
            <a href="#"><li className="hover:text-white transition duration-300 ease-in-out">Home</li></a>
            <a href="#"><li>Services</li></a>
            <a href="#"><li>About Us</li></a>
            <a href="#"><li>Contact Us</li></a>
          </ul>
        </div>
    </div>
  );
}

export default App
