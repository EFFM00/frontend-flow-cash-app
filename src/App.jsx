import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import Dashboard from "./pages/Dashboard/Dashboard";
import HeaderDashboard from "./components/Header/Header"
import { DashboardWrapperCont, OutletCont } from "./App";
import MenuDesktop from "./components/MenuDesktop/MenuDesktop";
import useScreenSize from "./hooks/useScreenSize";
import MenuContent from "./components/Menu/Menu";
import PurchaseOfMerchandise from "./pages/Dash-PurchaseOfMerchandise/PurchaseOfMerchandise";

function DashboardWrapper() {

    const {width} = useScreenSize();

    return (
        <>
            <HeaderDashboard/>
            <DashboardWrapperCont>
                {width <= 768 ? (
                    <MenuMobile>
                        <MenuContent/>
                    </MenuMobile>
                ) : (
                    <MenuDesktop>
                        <MenuContent/>
                    </MenuDesktop>
                )}
                <OutletCont>
                    <Outlet />
                </OutletCont>
            </DashboardWrapperCont>
        </>
        );
    }

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/dashboard/*" element={<DashboardWrapper />}>
                    <Route index element={<Dashboard />}/>
                </Route>

                <Route path="/ingresos/*" element={<DashboardWrapper />}>
                    <Route path="registro-ventas" element={<>registro-ventas</>}/>
                    <Route path="cobranzas" element={<>cobranzas</>}/>
                    <Route path="notas-ventas" element={<>notas-ventas</>}/>
                    <Route path="otros-ingresos" element={<>otros-ingresos</>}/>
                </Route>

                <Route path="/egresos/*" element={<DashboardWrapper />}>
                    <Route path="compra-mercaderia" element={<PurchaseOfMerchandise/>}/>
                    <Route path="honorarios" element={<>honorarios</>}/>
                    <Route path="remuneraciones" element={<>remuneraciones</>}/>
                    <Route path="impuestos" element={<>impuestos</>}/>
                    <Route path="creditos-bancarios" element={<>creditos-bancarios</>}/>
                    <Route path="gastos-recurrentes" element={<>gastos-recurrentes</>}/>
                    <Route path="otros-gastos" element={<>otros-gastos</>}/>
                </Route>

                <Route path="/bancos/*" element={<DashboardWrapper />}>
                    <Route index element={<>bancos</>}/>
                </Route>

                <Route path="/reporteria/*" element={<DashboardWrapper />}>
                    <Route path="flujo-caja" element={<>flujo-caja</>}/>
                    <Route path="billetera" element={<>billetera</>}/>
                </Route>

                <Route path="/gestion-clientes/*" element={<DashboardWrapper />}>
                    <Route index element={<>gestion-clientes</>}/>
                </Route>

                <Route path="/ajustes/*" element={<DashboardWrapper />}>
                    <Route index element={<>ajustes</>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
