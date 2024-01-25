import { H2Menu, ImgIcon, LinkNested, LinkTitle, MenuStyle, SectionMenu } from "./styled";

import ChartIcon from "../../assets/chart-line-solid.svg";
import HandIcon from "../../assets/hand-holding-dollar-solid.svg";
import BillIcon from "../../assets/file-invoice-dollar-solid.svg";
import BankIcon from "../../assets/building-columns-solid.svg";
import UserIcon from "../../assets/user-solid.svg";
import FileIcon from "../../assets/file-lines-regular.svg";
import SettingIcon from "../../assets/gear-solid.svg";
import { useDispatch } from "react-redux";
import { close } from "../../store/menuSlice";

const MenuContent = () => {

    const dispatch = useDispatch();
    
    return (
        <MenuStyle>
            <LinkTitle to="/dashboard"><ImgIcon src={ChartIcon}/> Movimientos</LinkTitle>

            <SectionMenu>
                <H2Menu><ImgIcon src={HandIcon}/> Ingresos</H2Menu>
                <LinkNested to="/ingresos/registro-ventas" onClick={() => dispatch(close())}>Registro de ventas</LinkNested>
                <LinkNested to="/ingresos/cobranzas" onClick={() => dispatch(close())}>Cobranzas</LinkNested>
                <LinkNested to="/ingresos/notas-ventas" onClick={() => dispatch(close())}>Notas de venta</LinkNested>
                <LinkNested to="/ingresos/otros-ingresos" onClick={() => dispatch(close())}>Otros ingresos</LinkNested>
            </SectionMenu>

            <SectionMenu>
                <H2Menu><ImgIcon src={BillIcon}/> Egresos</H2Menu>
                <LinkNested to="/egresos/compra-mercaderia" onClick={() => dispatch(close())}>Compra de mercadería</LinkNested>
                <LinkNested to="/egresos/honorarios" onClick={() => dispatch(close())}>Honorarios</LinkNested>
                <LinkNested to="/egresos/remuneraciones" onClick={() => dispatch(close())}>Remuneraciones</LinkNested>
                <LinkNested to="/egresos/impuestos" onClick={() => dispatch(close())}>Impuestos</LinkNested>
                <LinkNested to="/egresos/creditos-bancarios" onClick={() => dispatch(close())}>Créditos bancarios</LinkNested>
                <LinkNested to="/egresos/gastos-recurrentes" onClick={() => dispatch(close())}>Gastos recurrentes</LinkNested>
                <LinkNested to="/egresos/otros-gastos" onClick={() => dispatch(close())}>Otros gastos</LinkNested>
            </SectionMenu>
                
            <LinkTitle to="/bancos" onClick={() => dispatch(close())}><ImgIcon src={BankIcon}/> Bancos</LinkTitle>

            <SectionMenu>
                <H2Menu><ImgIcon src={FileIcon}/> Reportería</H2Menu>
                <LinkNested to="/reporteria/flujo-caja" onClick={() => dispatch(close())}>Flujo de caja</LinkNested>
                <LinkNested to="/reporteria/billetera" onClick={() => dispatch(close())}>Billetera</LinkNested>
            </SectionMenu>

            <LinkTitle to="/gestion-clientes" onClick={() => dispatch(close())}><ImgIcon src={UserIcon}/> Gestión de clientes y proveedores</LinkTitle>

            <LinkTitle to="/ajustes" onClick={() => dispatch(close())}><ImgIcon src={SettingIcon}/> Ajustes</LinkTitle>
            <LinkTitle to="/permisos" onClick={() => dispatch(close())}><ImgIcon src={SettingIcon}/> Permisos</LinkTitle>
        </MenuStyle>
    )
}

export default MenuContent;