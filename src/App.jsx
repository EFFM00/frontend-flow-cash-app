import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import LateralMenu from "./components/LateralMenu/LateralMenu";
import Dashboard from "./pages/Dashboard/Dashboard";
import { DashboardWrapperCont } from "./App";

function DashboardWrapper() {
    return (
        <DashboardWrapperCont>
            <p style={{ display: 'inline', backgroundColor: 'red' }}>HOLA p</p>
            <Outlet />
        </DashboardWrapperCont>
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
