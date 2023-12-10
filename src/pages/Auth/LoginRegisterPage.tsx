import React, { useContext, useState } from "react";
import { AuthContext } from "../../store/Provider/AuthProvider";
import RegisterVerificationPage from "./RegisterVerificationPage";
import LoginCodeActivationPage from "./LoginCodeActivationPage";
import { Link, useHistory } from "react-router-dom";

export default function LoginRegisterPage() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [isForgotPasswordVisible, setIsForgotPasswordVisible] = useState(false);
    const history = useHistory();
    const { state, logout } = useContext(AuthContext);
    const toggleRegister = () => {
        setIsRegistering(!isRegistering);
    };
    const toggleForgotPassword = () => {
        setIsForgotPasswordVisible(!isForgotPasswordVisible);
    };
    if (state.isAuthenticated) {
        history.push('/');
    }
    return (
        <>
            {!isForgotPasswordVisible && (<div className="flex flex-row justify-center mt-5 mb-2 sticky  top-0">
                <div className="flex flex-row items-center gap-3 bg-white">
                    <div className='flex flex-row  border rounded-full gap-2 p-1 border-gray-300'>
                        <div onClick={() => setIsRegistering(false)} className={`cursor-pointer btn bg-${!isRegistering ? 'primary-500 text-white' : 'white'} px-3 py-1 border rounded-2xl`}>Se connecter</div>
                        <div onClick={() => setIsRegistering(true)} className={`cursor-pointer btn bg-${isRegistering ? 'primary-500  text-white' : 'white'} px-3 py-1 border rounded-2xl`}>Créer un compte</div>
                    </div>
                </div>
            </div>
            )}
            {isRegistering ? (
                <>
                    <RegisterVerificationPage toggleRegister={toggleRegister}>
                        <div className="mt-5 text-center text-sm">
                            <div onClick={toggleRegister}>Vous avez déjà un compte ? <span className="cursor-pointer text-primary-500 hover:text-primary-600">Connecter-vous !</span>.</div>
                        </div>
                    </RegisterVerificationPage>

                </>
            ) : (
                <div style={{ flex: 1 }}>
                    {!isForgotPasswordVisible && (
                        <>
                            <div
                                style={{
                                    flex: 1
                                }}
                            >
                                <LoginCodeActivationPage
                                    toggleRegister={toggleRegister}
                                >
                                    <div className="mt-5 text-center text-sm">
                                        <div className="mb-2">
                                            <Link to={'/forgot-password'} className="text-primary-500 hover:text-primary-600">Forgot your password ?</Link>
                                        </div>
                                        <div>Don't have an account? <span onClick={toggleRegister} className="cursor-pointer text-primary-500 hover:text-primary-600">Sign up now</span>.</div>
                                    </div>
                                </LoginCodeActivationPage>
                            </div>
                        </>
                    )}

                </div>
            )}
        </>
    );
}
