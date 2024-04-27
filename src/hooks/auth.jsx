import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }){
    const [data, setData] = useState({});

    


    async function signIn({ email, password }){

    try{

            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("NotasFácil:user", JSON.stringify(user));
            localStorage.setItem("NotasFácil:token", token);


            api.defaults.headers.autorization = `Bearer ${token}`;
            setData({ user, token });

        }  catch (error) {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possivel logar!");

            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("NotasFácil:token");
        const user = localStorage.getItem("NotasFácil:user");

        if(token && user){
            api.defaults.headers.autorization = `Bearer ${token}`;
        
        setData({
            token,
            user: JSON.parse(user)
        });
        }



    }, []);

    return(
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };