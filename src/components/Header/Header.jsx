import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "../../assets/bars-solid.svg"
import { ImgIcon, NavBar } from "./styled";
import { handlerOpen } from "../../store/menuSlice";
import { useEffect } from "react";

const HeaderDashboard = () => {

    const dispatch = useDispatch();
    const menuIsOpen = useSelector((state) => state.menu.isOpen);

    useEffect(() => {
        console.log("menuIsOpen", menuIsOpen);
    }, [menuIsOpen])

    return (
        <NavBar>
            <ImgIcon
                src={MenuIcon}
                onClick={() => dispatch(handlerOpen())}
            />
        </NavBar>
    );
};

export default HeaderDashboard;
