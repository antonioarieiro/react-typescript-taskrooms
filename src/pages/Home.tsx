import { useContext, FormEvent, useState } from 'react';
import { authContext } from '../context/AuthContext';
import { useHistory } from 'react-router';
import logo from '../images/logo.svg';
import buttonICon from '../images/google-icon.svg';
import { Button } from '../componentes/Button';
import imageAside  from '../images/illustration.svg';
import '../globalStyles/auth.scss';
import { database } from '../services/firebase';

export function Home() {

  const {  verifySignUser, user } = useContext(authContext);

  const history = useHistory();

  const [roomCode, setRoomCode] = useState('');

  const hadleCreateRoom = async () => {
    if ( !user ) {
      await verifySignUser();
    }
    history.push('./room/new')
  }

  const handleJoinRoom = async(event: FormEvent) => {
    event.preventDefault();
    
    if ( roomCode.trim() === '') {
      return;
    }
    const roomRef = await database.ref(`rooms/${roomCode}`).get(); //.get busca todos os registros da sala

    if ( !roomRef.exists() ){ // caso retorne falso
      alert(`a sala ${roomCode} não existe`);
      return;
    }

    history.push(`/room/${roomCode}`)
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
          <form onSubmit={handleJoinRoom}>
            <input 
              type="text"
              placeholder="Digite o codigo da sala"
              onChange={e => setRoomCode(e.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na Sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}
