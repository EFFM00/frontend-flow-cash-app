import BtnSubmit from "../../../components/BtnSubmit/BtnSubmit";
import FieldGeneric from "../../../components/FieldGeneric/FieldGeneric";
import { FieldsCont } from "./styled";

const FormPurchaseOfMerchandise = () => {
    return (
        <form>
            <FieldsCont>
                <FieldGeneric
                title="Fecha"
                type="date"
                name="date"
                id="date"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Fecha"
                />

                <FieldGeneric
                title="Número de documento"
                type="number"
                name="number"
                id="number"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Número de documento"
                />

                <FieldGeneric
                title="Monto"
                type="number"
                name="amount"
                id="amount"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Monto"
                />
                
                <FieldGeneric
                title="Detalles"
                type="text"
                name="details"
                id="details"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Detalles"
                />

                <FieldGeneric
                title="Detalles"
                type="text"
                name="details"
                id="details"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Detalles"
                />
            </FieldsCont>

            <BtnSubmit
            type="submit" 
            text="Guardar" 
            onClick={() => {}} 
            color="#59d999" 
            colorText={"black"} 
            ubication="center"
            />

            <BtnSubmit
            type="submit" 
            text="Cancelar" 
            onClick={() => {}} 
            color="#AF5151" 
            colorText={"black"} 
            ubication="center"
            />

        </form>
    );
};

export default FormPurchaseOfMerchandise;