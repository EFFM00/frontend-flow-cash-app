import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import LateralMenu from "./components/LateralMenu/LateralMenu";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/login"} element={<Login/>}/>
                <Route exact path={"/register"} element={<Register/>}/>
                <Route path={"/dashboard/*"} element={<Header/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;