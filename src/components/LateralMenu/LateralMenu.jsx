import { useEffect, useState } from "react";
import { MenuContainer, NavContainer } from "./styled";
import useScreenSize from "../../hooks/useScreenSize";

const LateralMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const {width} = useScreenSize();

    useEffect(() => {
        width >= 768 && setIsOpen(true)
    }, [width])

    return (
        <NavContainer>
            <MenuContainer $isopen={isOpen}></MenuContainer>
        </NavContainer>
    )
}

export default LateralMenu;