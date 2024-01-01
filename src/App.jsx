import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import Dashboard from "./pages/Dashboard/Dashboard";
import HeaderDashboard from "./components/Header/Header"
import { DashboardWrapperCont, OutletCont } from "./App";
import MenuDesktop from "./components/MenuDesktop/MenuDesktop";
import useScreenSize from "./hooks/useScreenSize";

function DashboardWrapper() {

    const {width} = useScreenSize();

    return (
        <>
            <HeaderDashboard/>
            <DashboardWrapperCont>
                {width <= 768 ? (
                    <MenuMobile>
                    </MenuMobile>
                ) : (
                    <MenuDesktop>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.

                            Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.

                            Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.

                            Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.

                            Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.

                            Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.

                        </p>
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
