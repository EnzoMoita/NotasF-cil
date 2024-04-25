import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';
import perfilImage from '../../perfil/perfil.png';

export function Header(){

    return(
        <Container>
            <Profile to="/profile">
              <img 
              src={perfilImage}
              alt="Foto do Usuário" 
              />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Enzo Salomão</strong>
                </div>

            </Profile>

            <Logout>
              <RiShutDownLine/>

            </Logout>
        
        </Container>
    );
}
