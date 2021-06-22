import imageAside  from '../images/illustration.svg';
import logo from '../images/logo.svg';
import { Button } from '../componentes/Button';
import { Link } from 'react-router-dom';
import '../globalStyles/auth.scss';
import { useContext } from 'react';
import { authContext } from '../context/AuthContext';


export function NewRoom() {

  const { user } = useContext(authContext);

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
          <h2>Criar uma Nova sala</h2>
          <form>
            <input 
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/" > clique aqui </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
