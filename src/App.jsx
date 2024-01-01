import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import Dashboard from "./pages/Dashboard/Dashboard";
import HeaderDashboard from "./components/Header/Header"
import { DashboardWrapperCont, OutletCont } from "./App";
import MenuDesktop from "./components/MenuDesktop/MenuDesktop";
import useScreenSize from "./hooks/useScreenSize";
import MenuContent from "./components/Menu/Menu";

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
                <Route path="/" element={<h1>HOLA 1</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/dashboard/*" element={<DashboardWrapper />}>
                    <Route index element={<Dashboard />}/>
                    <Route path="h" element={<h1>HOLAAAAAAAA index</h1>} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
