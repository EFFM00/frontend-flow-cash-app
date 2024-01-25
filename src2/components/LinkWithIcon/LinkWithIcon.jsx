import {ContBtn, PlusIcon} from "./styled"
import useScreenSize from "../../hooks/useScreenSize";
import { useDispatch, useSelector } from "react-redux";
import { handlerFormRegistry } from "../../store/formRegistrySlice";
import { useEffect, useState } from "react";

const LinkWithIcon = ({btnTextPrimary, btnTextSecondary, iconPathPrimary, iconPathSecondary}) => {

    const [btnText, setBtnText] = useState(btnTextPrimary);
    const [icon, setIcon] = useState(iconPathPrimary);

    const {width} = useScreenSize();
    const dispatch = useDispatch();

    const isViewMode = useSelector((state) => state.formRegistry.isView);

    useEffect(() => {
        setBtnText(isViewMode ? btnTextPrimary : btnTextSecondary);
        setIcon(isViewMode ? iconPathPrimary : iconPathSecondary);
    }, [isViewMode])
    
    const handlerClick = () => {
        dispatch(handlerFormRegistry())
    }
    return (
        <ContBtn onClick={handlerClick}>
            <PlusIcon src={icon} />
            {width > 768 && btnText}
        </ContBtn>
    )
}

export default LinkWithIcon;