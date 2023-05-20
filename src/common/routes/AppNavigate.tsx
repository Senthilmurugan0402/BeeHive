import { useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { PageLinks } from "../appData/Constants";
import Scrolltop from "../components/Scrolltop";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import Home from "../../components/home/Home";
import Users from "../../components/user/Users";
import Profile from "../../components/profile/Profile";

const AppNavigate: React.FC = () => {

    const [sessionValid, setSessionValid] = useState(false);


    return (
        <Router>
            <Scrolltop />
                <Routes>
                    <Route path={PageLinks.HOME} element={<Home />} />
                    <Route path={PageLinks.REGISTER} element={<Register />} />
                    <Route path={PageLinks.LOGIN} element={<Login />} />
                    <Route path={PageLinks.USERS} element={<Users />} />
                    <Route path={PageLinks.PROFILE} element={<Profile />} />
                    <Route path="/" element={<Navigate to={PageLinks.LOGIN} />} />
                </Routes>
        </Router>
    )
}

export default AppNavigate;