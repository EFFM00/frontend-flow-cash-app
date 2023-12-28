import { useEffect, useState } from "react";
import { ImgIcon, NavBar } from "./styled";
import MenuIcon from "../../assets/bars-solid.svg"
import useScreenSize from "../../hooks/useScreenSize";
import { useModal } from "../../hooks/useModal";

const Header = () => {
    const [isOpenModal, openModal, closeModal] = useModal(false);

    const {width} = useScreenSize();

    useEffect(() => {
        width >= 768 && openModal()
        
    }, [width])

    return (
        <NavBar>
            <ImgIcon src={MenuIcon} isOpen={isOpenModal} closeMenu={closeModal}/>
        </NavBar>
    )
}

export default Header;