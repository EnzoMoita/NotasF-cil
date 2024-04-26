import { Container, Form, Background } from './styles';
import { useAuth } from '../../hooks/auth';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiMail, FiLock} from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function SignIn(){

    const data = useAuth();
    console.log("Meu contexto =>", data);
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
                />

                <Input
                placeholder="Senha"
                type="password"
                icon={FiLock}
                />

                <Button title="Entrar" />

                <Link to="/register" >
                    Criar conta

                </Link>

            </Form>
            <Background/>


        </Container>
    );

}