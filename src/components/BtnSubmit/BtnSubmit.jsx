import { Btn } from "./styled";

const BtnSubmit = ({text, type, onClick, color, colorText}) => {
    return (
        <Btn 
        type={type} 
        onClick={onClick} 
        colorBack={color} 
        colorText={colorText}
        aria-label={text}
        title={text}
        >{text}</Btn>
    );
}

export default BtnSubmit;