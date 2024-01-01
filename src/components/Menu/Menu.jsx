import { Link } from "react-router-dom";

const MenuContent = () => {
    return (
        <aside>
            <Link to="/dashboard">Movimientos</Link>

            <section>
                <h2>Ingresos</h2>
                <Link to="/ingresos/registro-ventas">Registro de ventas</Link>
                <Link to="/ingresos/cobranzas">Cobranza</Link>
                <Link to="/ingresos/notas-ventas">Notas de venta</Link>
                <Link to="/ingresos/otros-ingresos">Otros ingresos</Link>
            </section>

            <section>
                <h2>Egresos</h2>
                <Link to="/egresos/compra-mercaderia">Compra de mercadería</Link>
                <Link to="/egresos/honorarios">Honorarios</Link>
                <Link to="/egresos/remuneraciones">Remuneraciones</Link>
                <Link to="/egresos/impuestos">Impuestos</Link>
                <Link to="/egresos/creditos-bancarios">Créditos bancarios</Link>
                <Link to="/egresos/gastos-recurrentes">Gastos recurrentes</Link>
                <Link to="/egresos/otros-gastos">Otros gastos</Link>
            </section>
                
            
            <section>
                <h2>Egresos</h2>
                <Link to="/egresos/compra-mercaderia">Compra de mercadería</Link>
                <Link to="/egresos/honorarios">Honorarios</Link>
                <Link to="/egresos/remuneraciones">Remuneraciones</Link>
                <Link to="/egresos/impuestos">Impuestos</Link>
                <Link to="/egresos/creditos-bancarios">Créditos bancarios</Link>
                <Link to="/egresos/gastos-recurrentes">Gastos recurrentes</Link>
                <Link to="/egresos/otros-gastos">Otros gastos</Link>
            </section>
                
            <Link to="/bancos">Bancos</Link>

            <section>
                <h2>Reportería</h2>
                <Link to="/reporteria/flujo-caja">Flujo de caja</Link>
                <Link to="/reporteria/billetera">Billetera</Link>
            </section>

            <Link to="/gestion-clientes">Gestión de clientes y proveedores</Link>

            <Link to="/ajustes">Ajustes</Link>
        </aside>
    )
}

export default MenuContent;