import { Input } from "./styled";

const InputGeneric = ({ type, name, id, onChange, onBlur, placeholder }) => {
    return <Input 
    type={type}
    placeholder={placeholder}
    name={name} 
    id={id} 
    onChange={onChange}
    onBlur={onBlur}
    />;
};

export default InputGeneric;
