import { FormCont } from "./styled";

const FormGeneric = ({children}) => {
    return (
        <FormCont>
            {children}
        </FormCont>
    )
};

export default FormGeneric;