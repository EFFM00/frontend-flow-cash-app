import LateralMenu from "../LateralMenu/LateralMenu";
import Menu from "../Menu/Menu";

const BurgerMenu = ({ isOpen, closeMenu }) => {
    const handleCloseModal = () => {
        closeMenu();
    };

    return (
    <LateralMenu isOpen={isOpen} closeModal={closeMenu}>
        aaa
    </LateralMenu>
    );
};

export default BurgerMenu;
