import { useEffect, useState } from "react";
import { ImgIcon, MenuContainer, NavBar, NavContainer } from "./styled";
import MenuIcon from "../../assets/bars-solid.svg"
import useScreenSize from "../../hooks/useScreenSize";

const LateralMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const {width} = useScreenSize();

    useEffect(() => {
        width >= 768 && setIsOpen(true)
    }, [width])

    return (
        <NavContainer>

            <NavBar>
                <ImgIcon src={MenuIcon} isopen={isOpen} onClick={() => setIsOpen(!isOpen)}/>
            </NavBar>
            <MenuContainer $isopen={isOpen}></MenuContainer>
        </NavContainer>
    )
}

export default LateralMenu;