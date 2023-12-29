import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import LateralMenu from "./components/LateralMenu/LateralMenu";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
    return (
        <BrowserRouter>
            <LateralMenu/>

            <Routes>
                <Route exact path={"/login"} element={<Login/>}/>
                <Route exact path={"/register"} element={<Register/>}/>
                <Route path={"/dashboard/*"} element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;