import FieldGeneric from "../FieldGeneric/FieldGeneric";
import InputGeneric from "../InputGeneric/InputGeneric";
import Label from "../Label/Label";
import { ShowPwd } from "../../assets/eye-solid.svg"
import { HiddenPwd } from "../../assets/eye-slash-solid.svg"
import { BtnEye, ContainerFieldPassword, FieldStyle } from "./styled";

const FieldPassword = ({
    title,
    name,
    id,
    onChange,
    onBlur,
    placeholder,
    conditionalType,
    onClickEye
}) => {
    return (
        <ContainerFieldPassword>
            <FieldGeneric
                title={title}
                type={conditionalType ? "text" : "password"}
                name={name}
                id={id}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
            />
            <BtnEye type="button" onClick={onClickEye}>
                { conditionalType ? HiddenPwd : ShowPwd }
            </BtnEye>
        </ContainerFieldPassword>
    );
};

export default FieldPassword;

