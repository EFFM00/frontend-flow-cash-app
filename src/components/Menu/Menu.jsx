import { H2Menu, ImgIcon, LinkNested, LinkTitle, MenuStyle, SectionMenu } from "./styled";

import ChartIcon from "../../assets/chart-line-solid.svg";
import HandIcon from "../../assets/hand-holding-dollar-solid.svg";
import BillIcon from "../../assets/file-invoice-dollar-solid.svg";
import BankIcon from "../../assets/building-columns-solid.svg";
import UserIcon from "../../assets/user-solid.svg";
import FileIcon from "../../assets/file-lines-regular.svg";
import SettingIcon from "../../assets/gear-solid.svg";
const MenuContent = () => {
    return (
        <MenuStyle>
            <LinkTitle to="/dashboard"><ImgIcon src={ChartIcon}/> Movimientos</LinkTitle>

            <SectionMenu>
                <H2Menu><ImgIcon src={HandIcon}/> Ingresos</H2Menu>
                <LinkNested to="/ingresos/registro-ventas">Registro de ventas</LinkNested>
                <LinkNested to="/ingresos/cobranzas">Cobranza</LinkNested>
                <LinkNested to="/ingresos/notas-ventas">Notas de venta</LinkNested>
                <LinkNested to="/ingresos/otros-ingresos">Otros ingresos</LinkNested>
            </SectionMenu>

            <SectionMenu>
                <H2Menu><ImgIcon src={BillIcon}/> Egresos</H2Menu>
                <LinkNested to="/egresos/compra-mercaderia">Compra de mercadería</LinkNested>
                <LinkNested to="/egresos/honorarios">Honorarios</LinkNested>
                <LinkNested to="/egresos/remuneraciones">Remuneraciones</LinkNested>
                <LinkNested to="/egresos/impuestos">Impuestos</LinkNested>
                <LinkNested to="/egresos/creditos-bancarios">Créditos bancarios</LinkNested>
                <LinkNested to="/egresos/gastos-recurrentes">Gastos recurrentes</LinkNested>
                <LinkNested to="/egresos/otros-gastos">Otros gastos</LinkNested>
            </SectionMenu>
                
            <LinkTitle to="/bancos"><ImgIcon src={BankIcon}/> Bancos</LinkTitle>

            <SectionMenu>
                <H2Menu><ImgIcon src={FileIcon}/> Reportería</H2Menu>
                <LinkNested to="/reporteria/flujo-caja">Flujo de caja</LinkNested>
                <LinkNested to="/reporteria/billetera">Billetera</LinkNested>
            </SectionMenu>

            <LinkTitle to="/gestion-clientes"><ImgIcon src={UserIcon}/> Gestión de clientes y proveedores</LinkTitle>

            <LinkTitle to="/ajustes"><ImgIcon src={SettingIcon}/> Ajustes</LinkTitle>
        </MenuStyle>
    )
}

export default MenuContent;