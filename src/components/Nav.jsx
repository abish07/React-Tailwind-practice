import logo from '../assets/react.svg'

function NavBar(){
    return(
        <nav>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>
        </nav>
    );
}
export default NavBar