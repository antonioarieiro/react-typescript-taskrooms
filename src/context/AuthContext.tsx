import { createContext, ReactNode, useEffect, useState } from "react";
import { firebase, auth } from '../services/firebase';


type User = {
  id: string;
  name: string;
  avatar: string;
}

type authContextType = {
  user: User | undefined,
  verifySignUser:() => Promise<void>;
}

type authContextProviderProps = {
  children: ReactNode;
}

export const authContext = createContext({}as authContextType);


export function AuthContextProvider(props: authContextProviderProps) {
  useEffect(() => {
    //recuperar o estado anterior do usuario
    const returnStateUser = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user

        if(!displayName || !photoURL) {
          throw new Error('Missing Information from Google Account.');
        }

        setUSer({
          id: uid,
          name: displayName,
          avatar:photoURL,
        })
      }
    })

    return () => {
      returnStateUser();
    }

  },[])

  const [user, setUSer] = useState<User>();

  const verifySignUser = async () => {
      //utiizando a validação do google auth provider que vem do firebase
    const provider = new firebase.auth.GoogleAuthProvider();
      //utilizando o metodo popup do google para validar a conta
    const result = await auth.signInWithPopup(provider);
    //se retornar um usuario
    if (result.user) {
      // pegamos o nome a foto e o uid do usuario
      const { displayName, photoURL, uid } = result.user
      
      if(!displayName || !photoURL) {
        //se não retornar um nome ou uma foto disparamos um erro das informações que faltaram
        throw new Error('Missing Information from Google Account');

      }
      //setamos o resultado nos dados do usuario
      setUSer({
        id: uid,
        name: displayName,
        avatar:photoURL,
      })
    }
  }
  return (
    <authContext.Provider value={{user, verifySignUser}}>
      {props.children}
    </authContext.Provider>
  );
}