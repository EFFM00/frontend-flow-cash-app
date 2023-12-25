import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/login"} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;