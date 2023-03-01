import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/api.js';

interface iUserContextProps {
  children: React.ReactNode;
}
interface iUserContext {
  user: object;
  setUser: React.Dispatch<React.SetStateAction<object>>;
  loginUser: (formDataLogin: unknown) => Promise<void>;
  registerUser: (formDataRegister: unknown) => Promise<void>;
}
export const UserContext = createContext({} as iUserContext);
export const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  async function loginUser(formDataLogin: unknown) {
    try {
      const response = await api.post('/login', formDataLogin);
      localStorage.setItem('@Token:', response.data.accessToken);
      localStorage.setItem('@UserID:', JSON.stringify(response.data.user.id));
      setUser(response.data.user);
      toast.success('Login Realizado com Sucesso!!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      navigate('/shop');
    } catch (error) {
      toast.error('Login ou senha Incorretos!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }
  async function registerUser(formDataRegister: unknown) {
    try {
      const response = await api.post('/users', formDataRegister);
      toast.success('Registro realizado com sucesso!!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      navigate('/');
    } catch (error) {
      toast.error('Erro ao registrar, confira seus dados.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }
  useEffect(() => {
    async function autoLogin() {
      try {
        const response = await api.post(
          `/login/${localStorage.getItem('@Token:')}`
        );
        setUser(response.data.user);
        navigate('/shop');
      } catch (error) {
        console.error(error);
        localStorage.clear();
        navigate('/');
      }
    }

    autoLogin();
  }, []);

  return (
    <UserContext.Provider value={{ loginUser, user, setUser, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
