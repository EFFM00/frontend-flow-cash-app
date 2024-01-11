import { useDispatch } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { useEffect } from "react";
import { changeToView } from "../../store/formRegistrySlice";

const Taxes = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <ContainerSections>
            <HeaderSection
            text="Impuestos" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
        </ContainerSections>
    )
}

export default Taxes;