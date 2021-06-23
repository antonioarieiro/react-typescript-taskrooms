//import { authContext } from '../context/AuthContext';
import { useState, FormEvent } from 'react';
import imageAside  from '../images/illustration.svg';
import logo from '../images/logo.svg';
import { Button } from '../componentes/Button';
import { Link, useHistory } from 'react-router-dom';
import '../globalStyles/auth.scss';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';


export function NewRoom() {
  const { user } = useAuth();
  const [inputState, setInputState] = useState('')
  const history = useHistory();

  const hadleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if ( inputState.trim() === '' ) {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: inputState,
      authorId: user?.id,
    })

    history.push(`rooms/${firebaseRoom.key}`);


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
          <h2>Criar uma Nova sala</h2>
          <form onSubmit={hadleCreateRoom}>
            <input 
              type="text"
              placeholder="Nome da sala"

              onChange={e => setInputState(e.target.value)}

              value={inputState}
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
