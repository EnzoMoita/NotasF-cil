import { Routes, Route, Navigate } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';




export function AuthRoutes(){
    const user = localStorage.getItem("NotasFácil:user");


    return(
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/Register" element={<SignUp />} />

            { !user && <Route path="*" element={<Navigate to="/"/>} /> }
        </Routes>
    )
}