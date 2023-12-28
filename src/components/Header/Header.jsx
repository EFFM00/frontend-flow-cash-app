import { useEffect } from "react";
import { ImgIcon, NavBar } from "./styled";
import MenuIcon from "../../assets/bars-solid.svg"
import useScreenSize from "../../hooks/useScreenSize";
import { useModal } from "../../hooks/useModal";
// import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const currentPath = location.pathname;

    const {width} = useScreenSize();

    useEffect(() => {
        if(
            currentPath !== "/login" &&
            currentPath !== "/register" &&
            currentPath !== "/"
        ) {
            width >= 768 && openModal()
        } else {
            closeModal()
        }
    }, [width])

    return (
        <NavBar>
            <ImgIcon src={MenuIcon} isOpen={isOpenModal} closeMenu={closeModal}/>
            {/* <BurgerMenu isOpen={isOpenModal} closeMenu={closeModal} /> */}
        </NavBar>
    )
}

export default Header;