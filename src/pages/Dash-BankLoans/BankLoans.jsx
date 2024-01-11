import { useDispatch } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/formRegistrySlice";
import { useEffect } from "react";

const BankLoans = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <ContainerSections>
            <HeaderSection 
            text="Créditos bancarios" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
        </ContainerSections>
    )
}

export default BankLoans;