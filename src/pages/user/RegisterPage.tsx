
import React, {useContext, useState} from "react";
import PasswordToggleTextInput from "../../components/user/PasswordToggleTextInput";
import apiUser from "../../utils/api";
import {AuthContext} from "../../context/AuthContext";
interface ErrorProps {
    errorMessages: any[];
}
const ErrorMessages = ({ errorMessages }: ErrorProps) => {
    return (
        <div>
            {errorMessages.map((msg: string, index: number) => (
                <div
                    key={index}
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        width: "100%",
                    }}
                >
                    <p
                        style={{ color: "red", fontSize: 15, marginLeft: 5 }}
                    >
                        {msg}
                    </p>
                </div>
            ))}
        </div>
    );
};

function validateState(state: any) {
    const { username, email, password, confirmPassword } = state;
    const errors = {} as any;

    if (!username || username.length < 3) {
        errors.username =
            "Le nom d'utilisateur doit contenir au moins  3 \n  caractères.";
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        errors.email = "L'adresse e-mail est invalide.";
    }

    if (!password || password.length < 6) {
        errors.password =
            "Le mot de passe doit contenir au moins 6 \n  caractères.";
    }

    if (password !== confirmPassword) {
        errors.confirmPassword = "Les mots de passe ne correspondent pas.";
    }

    const errorMessages = Object.values(errors);

    return {
        isValid: errorMessages.length === 0,
        errors: <ErrorMessages errorMessages={errorMessages} />,
    };
}

const RegisterPage = () => {
    const { state, dispatch, login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("admin123");
    const [confirmPassword, setConfirmPassword] = useState("admin123");
    const handleRegister = async () => {
        dispatch({ type: "REGISTER_START" });
        if (
            !validateState({
                email,
                username,
                password,
                confirmPassword,
            }).isValid
        ) {
            dispatch({
                type: "SET_MESSAGE",
                payload: validateState({
                    email,
                    username,
                    password,
                    confirmPassword,
                }).errors,
            });
        }
        try {
            let requestObj = apiUser.registerHandle(
                username,
                email,
                password,
                confirmPassword
            ).promise;
            requestObj
                .then((response: any) => {
                    console.log(response);
                    dispatch({
                        type: "SET_MESSAGE",
                        payload: response.message,
                    });
                })
                .catch((error:any) => {
                    dispatch({ type: "SET_MESSAGE", payload: error.message });
                    return;
                });
        } catch (error: any) {
            dispatch({ type: "SET_MESSAGE", payload: error.message });
            return;
        }
    };

    return (
        <div className="container flex-grow flex-shrink flex justify-center items-center px-4 pt-4 pb-2 sm:p-4">
            <div className="card mx-auto w-full max-w-md">
                <div className="card-body px-8 py-8">
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="mt-4  text-lg uppercase text-primary-400">Bienvenue</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Entrer vos information de connexion
                        </p>
                    </div>
            {state.message && <p>{state.message}</p>}
            <div className="mt-6 flex flex-col gap-5">
                <div>
                    <label className="label mb-1">Nom d'utilisateur</label>
                    <input
                        placeholder="Nom d'utilisateur"
                        className="input"
                        autoCapitalize="none"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }
                        }
                    />
                </div>
                <p>Adresse e-mail</p>
                <input
                    placeholder="Adresse e-mail"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        dispatch({
                            type: "UPDATE_EMAIL",
                            payload: e.target.value,
                        });
                    }}
                    autoCapitalize="none"
                />
            </div>
            <div>
                <p>Mot de passe</p>
                <PasswordToggleTextInput
                    placeholder="Mot de passe"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(e: any) => {
                        setPassword(e.target.value);
                      //  dispatch({ type: "SET_PASSWORD", payload: e.target.value });
                    }}
                />
            </div>
            <div>
                <p>Confirmation de Mot de passe</p>
                <PasswordToggleTextInput
                    placeholder="Confirmation de Mot de passe"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </div>
            <button
                onClick={handleRegister}
            >
                Créer mon compte
            </button>
        </div>
       </div>
    </div>
    );
};

export default RegisterPage;
