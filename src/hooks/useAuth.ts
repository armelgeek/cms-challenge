import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
    const { state ,logout} = useContext(AuthContext);
    return {...state,logout};
};
export default useAuth;
