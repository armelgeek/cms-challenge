import { useContext } from 'react';
import { AuthContext } from '../store/Provider/AuthProvider';

const useAuth = () => {
    const { state, logout } = useContext(AuthContext);
    return { ...state, logout };
};
export default useAuth;
