import { useDispatch, useSelector } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/formRegistrySlice";
import { useEffect } from "react";
import FormFees from "./FormFees/FormFees";

const Fees = () => {

    const dispatch = useDispatch();

    const isViewMode = useSelector((state) => state.formRegistry.isView);

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <ContainerSections>
            <HeaderSection
            text="Honorarios" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
            {
                isViewMode ? (
                    <>Acá estará la tabla para visualizar todos los datos</>
                ) : (
                    <FormFees/>
                )
            }
        </ContainerSections>
    )
}

export default Fees;