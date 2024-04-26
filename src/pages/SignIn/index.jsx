import { Container, Form, Background } from './styles';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiMail, FiLock} from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const {signIn} = useAuth();

    function handleSignIn(){
        signIn({ email, password });
    }
    return(
        <Container>
            <Form>
                <h1>Notas Fácil</h1>
                <p>Aplicação para salvar seus links úteis!</p>

                <h2>Faça seu Login</h2>

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />

                <Input
                placeholder="Senha"
                type="password"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn} />

                <Link to="/register" >
                    Criar conta

                </Link>

            </Form>
            <Background/>


        </Container>
    );

}