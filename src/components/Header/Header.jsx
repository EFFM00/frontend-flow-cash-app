import MenuIcon from "../../assets/bars-solid.svg"
import { ImgIcon, NavBar } from "./styled";

const Header = () => {
    return (
        <NavBar>
        <ImgIcon
            src={MenuIcon}
            isopen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
        />
        </NavBar>
    );
};

export default Header;
