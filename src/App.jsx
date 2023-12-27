import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import LateralMenu from "./components/LateralMenu/LateralMenu";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/login"} element={<Login/>}/>
                <Route exact path={"/register"} element={<Register/>}/>
                <Route exact path={"/dashboard"} element={<LateralMenu/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;