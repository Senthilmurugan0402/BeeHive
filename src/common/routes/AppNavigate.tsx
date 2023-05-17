import { useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { PageLinks } from "../appData/Constants";
import Scrolltop from "../components/Scrolltop";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import Home from "../../components/home/Home";

const AppNavigate: React.FC = () => {

    const [sessionValid, setSessionValid] = useState(false);


    return (
        <Router>
            <Scrolltop />
                <Routes>
                    <Route path={PageLinks.LOGIN} element={<Login />} />
                    <Route path={PageLinks.REGISTER} element={<Register />} />
                    <Route path={PageLinks.HOME} element={<Home />} />
                    <Route path="/" element={<Navigate to={PageLinks.HOME} />} />
                </Routes>
        </Router>
    )
}

export default AppNavigate;