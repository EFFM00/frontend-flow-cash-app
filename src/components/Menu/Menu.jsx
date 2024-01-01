import LinkMenu from "../LinkMenu/LinkMenu";

const MenuContent = () => {
    return (
        <aside>
            <LinkMenu path="/dashboard" text="Movimientos"/>

            <section>
                <h2>Ingresos</h2>
                <LinkMenu path="/ingresos/registro-ventas" text="Registro de ventas"/>
                <LinkMenu path="/ingresos/cobranzas" text="Cobranza"/>
                <LinkMenu path="/ingresos/notas-ventas" text="Notas de venta"/>
                <LinkMenu path="/ingresos/otros-ingresos" text="Otros ingresos"/>
            </section>

            <section>
                <h2>Egresos</h2>
                <LinkMenu path="/egresos/compra-mercaderia" text="Compra de mercadería"/>
                <LinkMenu path="/egresos/honorarios" text="Honorarios"/>
                <LinkMenu path="/egresos/remuneraciones" text="Remuneraciones"/>
                <LinkMenu path="/egresos/impuestos" text="Impuestos"/>
                <LinkMenu path="/egresos/creditos-bancarios" text="Créditos bancarios"/>
                <LinkMenu path="/egresos/gastos-recurrentes" text="Gastos recurrentes"/>
                <LinkMenu path="/egresos/otros-gastos" text="Otros gastos"/>
            </section>
                
            <LinkMenu path="/bancos" text="Bancos"/>

            <section>
                <h2>Reportería</h2> 
                <LinkMenu path="/reporteria/flujo-caja" text="Flujo de caja"/>
                <LinkMenu path="/reporteria/billetera" text="Billetera"/>
            </section>

            <LinkMenu path="/gestion-clientes" text="Gestión de clientes y proveedores"/>

            <LinkMenu path="/ajustes" text="Ajustes"/>
        </aside>
    )
}

export default MenuContent;