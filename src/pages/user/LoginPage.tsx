import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import PasswordToggleTextInput from "../../components/user/PasswordToggleTextInput";
const LoginPage = () => {
    const { state, dispatch, login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [formValid, setFormValid] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    useEffect(() => {
        // @ts-ignore
        setFormValid(email && password);
    }, [email, password]);
    const validatePassword = (password: string) => {
        return password.length >= 6;
    };
    const handleLogin = async () => {
        if (!email || !password) {
            dispatch({
                type: "SET_MESSAGE",
                payload: "Please enter both email and password",
            });
            return;
        }
        // Check if the email is valid using a regular expression
        if (!emailRegex.test(email)) {
            // If the email is not valid, show an error message
            dispatch({
                type: "SET_MESSAGE",
                payload: "Please enter a valid email address",
            });
            return;
        }
        try {
            await login(email, password);
        } catch (error) {
            console.log("login", error);
        }
    };
    return (
        <main className="container flex-grow flex-shrink flex justify-center items-center px-4 pt-4 pb-2 sm:p-4">
            <div className="card mx-4 max-w-md w-96">
                <div className="card-body px-8 py-8">
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="mt-4  text-lg uppercase text-primary-400">Bienvenue</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Entrer vos information de connexion
                        </p>
                    </div>
                    <div>{state.message && <p>{state.message}</p>}</div>
                    <div className="mt-6 flex flex-col gap-5">
                        <div>
                            <label className="label mb-1">Nom d'utilisateur</label>
                            <input
                                value={email}
                                type="email"
                                className="input border-slate-300 rounded-md focus:border-slate-300"
                                placeholder="Adresse e-mail"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    dispatch({ type: "SET_EMAIL", payload: e.target.value });
                                    setIsEmailValid(emailRegex.test(e.target.value));
                                }}
                                autoCapitalize="none"
                            />
                        </div>
                        <div className="">
                            <label className="label mb-1">Mot de passe</label>
                            <PasswordToggleTextInput
                                placeholder={"Mot de passe"}
                                value={password}
                                onChange={(e: any) => {
                                    setPassword(e.target.value);
                                    dispatch({ type: "SET_PASSWORD", payload: e.target.value });
                                }}
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <button  onClick={handleLogin} disabled={!formValid} className="btn btn-primary w-full py-2.5">Se connecter</button>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default LoginPage;
