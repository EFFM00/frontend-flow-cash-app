import LateralMenu from "../LateralMenu/LateralMenu";
import Menu from "../Menu/Menu";
import ModalMenu from "../Modal/ModalMenu";

const BurgerMenu = ({ isOpen, closeMenu }) => {
    const handleCloseModal = () => {
        closeMenu();
    };

    return (
    <LateralMenu isOpen={isOpen} closeModal={closeMenu}>
        <Menu handleCloseModal={handleCloseModal} />
    </LateralMenu>
    );
};

export default BurgerMenu;
