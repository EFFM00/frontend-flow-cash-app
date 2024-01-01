import { useDispatch } from "react-redux";
import MenuIcon from "../../assets/bars-solid.svg"
import { ImgIcon, NavBar } from "./styled";
import { handlerMenu } from "../../store/menuSlice";

const HeaderDashboard = () => {

    const dispatch = useDispatch();

    return (
        <NavBar>
            <ImgIcon
                src={MenuIcon}
                onClick={() => dispatch(handlerMenu())}
            />
        </NavBar>
    );
};

export default HeaderDashboard;
