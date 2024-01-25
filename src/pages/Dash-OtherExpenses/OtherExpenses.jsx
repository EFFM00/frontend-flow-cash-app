import { useDispatch, useSelector } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/formRegistrySlice";
import { useEffect } from "react";
import FormRegularExpenses from "../Dash-RegularExpenses/FormRegularExpenses/FormRegularExpenses";

const OtherExpenses = () => {

    const dispatch = useDispatch();

    const isViewMode = useSelector((state) => state.formRegistry.isView);

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <ContainerSections>
            <HeaderSection
            text="Otros gastos" 
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

export default OtherExpenses;