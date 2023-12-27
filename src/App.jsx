import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/login"} element={<Login/>}/>
                <Route exact path={"/register"} element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;