import { useDispatch, useSelector } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/formRegistrySlice";
import { useEffect } from "react";
import FormRegularExpenses from "./FormRegularExpenses/FormRegularExpenses";

const RegularExpenses = () => {

    const dispatch = useDispatch();

    const isViewMode = useSelector((state) => state.formRegistry.isView);

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <ContainerSections>
            <HeaderSection
            text="Gastos recurrentes" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
            {
                isViewMode ? (
                    <>Acá estará la tabla para visualizar todos los datos</>
                ) : (
                    <FormRegularExpenses/>
                )
            }
        </ContainerSections>
    )
}

export default RegularExpenses;