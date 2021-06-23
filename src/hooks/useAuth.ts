import { useContext } from 'react';
import { authContext,  } from '../context/AuthContext';

export const useAuth = () => {
  const value = useContext(authContext)
  return value;
}
