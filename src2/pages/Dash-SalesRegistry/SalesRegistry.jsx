import { useDispatch } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/formRegistrySlice";
import { useEffect } from "react";

const SalesRegistry = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <ContainerSections>
            <HeaderSection
            text="Registro de ventas" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
        </ContainerSections>
    )
}

export default SalesRegistry;