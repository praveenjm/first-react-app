import { LOGO_URL } from "../utils/constans";


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}/>
            </div>
            <div className="Nav">
                Menu Items
            </div>
        </div>
    )
}

export default Header;