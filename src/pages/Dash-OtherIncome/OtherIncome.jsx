import { useDispatch } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/formRegistrySlice";
import { useEffect } from "react";

const OtherIncome = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <ContainerSections>
            <HeaderSection
            text="Otros ingresos" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
        </ContainerSections>
    )
}

export default OtherIncome;