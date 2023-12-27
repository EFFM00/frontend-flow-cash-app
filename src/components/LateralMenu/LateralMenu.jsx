import { useState } from "react";
import { MenuContainer } from "./styled";
import MenuIcon from "../../assets/bars-solid.svg"

const LateralMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <MenuContainer>
            {
                isOpen && (
                    <p>AHHH</p>
                )
            }
            <div>

            </div>
            <div>
                <img src={MenuIcon} onClick={() => setIsOpen(!isOpen)}/>
            </div>
        </MenuContainer>
    )
}

export default LateralMenu;