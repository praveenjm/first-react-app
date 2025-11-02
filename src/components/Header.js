import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constans";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    useEffect(() => {
        console.log('useEffect called')
    },[btnNameReact])
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}/>
            </div>
            <div className="Nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                    <li>cart</li>
                    <button className="login"
                    onClick={() => {
                       btnNameReact === "Login"
                       ? setBtnNameReact("Logout")
                       : setBtnNameReact("Login") 
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;