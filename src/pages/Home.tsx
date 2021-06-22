import { useContext } from 'react';
import { authContext } from '../context/AuthContext';
import { useHistory } from 'react-router';
import logo from '../images/logo.svg';
import buttonICon from '../images/google-icon.svg';
import { Button } from '../componentes/Button';
import imageAside  from '../images/illustration.svg';
import '../globalStyles/auth.scss';

export function Home() {

  const history = useHistory();
  const {  verifySignUser, user } = useContext(authContext);

  const hadleCreateRoom = async () => {
    if ( !user ) {
      await verifySignUser();
    }
    history.push('./room/new')
    console.log(user)
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={ imageAside } alt="imagemILustração"/>
        <strong>Projeto new Room</strong>
        <p>Projeto feito com React - TypeScript - Firebase</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="Logo"/>
          <button className="bnt-create-room" onClick={hadleCreateRoom}>
            <img src={buttonICon} alt="button icon" />Criar Sala
          </button>
          <div className="separator">Entra em Sala existente</div>
          <form>
            <input 
              type="text"
              placeholder="Digite o codigo da sala"
            />
            <Button type="submit">Entrar na Sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}
