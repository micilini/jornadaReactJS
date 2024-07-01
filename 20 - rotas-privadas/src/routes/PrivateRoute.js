import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

export default function PrivateRoute({ children }) {
    const navigate = useNavigate();
    const { accessToken, loadingAuth, refreshUser, verifyToken } = useContext(AuthContext);
  
    const doRefresh = async () => {
      const user = await refreshUser();
      if (!user) {
        navigate("/");
      }
    };
  
    const isAuth = async () => {
      if (accessToken == null) {
        await doRefresh();
      } else {
        const isTokenValid = await verifyToken();
        if (!isTokenValid) {
          await doRefresh();
        }
      }
    };
  
    useEffect(() => {
      isAuth();
    }, [children]);
  
    if (loadingAuth) {
      return <div>Loading...</div>;
    }
  
    return children;
  }