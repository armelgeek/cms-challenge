import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../store/Provider/AuthProvider";
import PasswordToggleTextInput from "./PasswordToggleTextInput";
import { Link } from "react-router-dom";
import { MdOutlineWavingHand } from "react-icons/md";
const LoginPage = ({ toggleCodeActivation, toggleForgotPassword }: any) => {
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
    // If all validation checks pass, attempt to log in
    try {
      await login(email, password, toggleCodeActivation);
    } catch (error) {
      console.log("login", error);
    }
  };
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center">
        <div className="mt-1 rounded-md bg-white border py-7 px-6 w-1/3">
          <div className="flex flex-col justify-center items-center">
            <div className="icon-login mb-2">
              <MdOutlineWavingHand className="text-primary-500" size={40} />
            </div>
            <h1 className="text-xl font-semibold text-center">Se connecter</h1>
          </div>
          {state.message && <p>{state.message}</p>}
          <div className="mt-1">
            <div className="mt-5 flex flex-col gap-2 justify-center items-center">
              <div className="w-full">
                <button className="flex items-center gap-1 justify-center w-full bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  <img src="/icons/google.svg" className="h-4 w-4" />
                  <span className="font-semibold">Continuer avec Google</span>
                </button>
              </div>
              <div className="w-full">
                <button className="flex items-center justify-center w-full px-4 py-2  space-x-1 text-sm text-center bg-blue-500 text-white transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700">
                  <img src="/icons/facebook.svg" className="h-4 w-4" />
                  <span className="font-semibold text-sm">Continuer avec Facebook</span>
                </button>
              </div>
            </div>
            <div className="mt-6 mb-4 flex items-center">
              <div className="grow border-t border-gray-300"></div>
              <span className="mx-4 shrink text-gray-400">Or continue with</span>
              <div className="grow border-t border-gray-300"></div>
            </div>
          </div>
          <div className="grid gap-y-2">
            <label htmlFor="email" className="text-gray-700 mt-2">Adresse e-mail</label>
            <div className="input-email">
              <input
                value={email}
                type="email"
                placeholder="Adresse e-mail"
                onChange={(e) => {
                  setEmail(e.target.value);
                  dispatch({ type: "SET_EMAIL", payload: e.target.value });
                  setIsEmailValid(emailRegex.test(e.target.value));
                }}
                className="text-sm  h-10 w-full border border-gray-300 items-center rounded-primary bg-slate-50 px-3 dark:border-transparent dark:bg-slate-700 sm:flex"

              />
            </div>
            <label htmlFor="password" className="text-gray-700 mt-2">Mot de passe</label>
            <div className="input-email">
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
          <div className="mt-3">
            <button type="button" onClick={handleLogin} disabled={!formValid} className="w-full  rounded-md">
              <div className="btn btn-base btn-primary  w-full">Se connecter</div>
            </button>
          </div>
          <div className="mt-5 text-center text-sm">
            <Link to={"/forgot-password"} className="cursor-pointer text-primary-500 hover:text-primary-600">Mot de passe oublié ?</Link>
          </div>
        </div>

      </div>
      {/**<main className="container flex-grow px-4 pt-4 pb-2 sm:p-4">
      <div className="card mx-auto w-full max-w-md">
        <div className="card-body px-10 py-12">
          <div className="flex flex-col items-center justify-center">
            <img
              src="./images/logo-small.svg"
              alt="logo"
              className="h-[50px]"
            />
            <svg className="svg-inline--fa fa-hand-wave" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="hand-wave" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M304 32C330.5 32 352 53.53 352 80C352 88.84 359.2 96 368 96S384 88.84 384 80C384 35.89 348.1 0 304 0C295.2 0 288 7.156 288 16S295.2 32 304 32zM417.9 106.9c-42.22 0-56.93 36.81-59.45 45.39l-112.2-111.9C235.7 29.81 221.6 23.1 206.7 23.1c-5.969 0-39.95 2.27-52.29 36.15c-5.043-1.463-10.32-2.219-15.72-2.219c-28.2 0-55.64 22.11-55.64 55.29c0 5.376 .755 10.77 2.255 16.01c-17.53 6.444-36.26 24.1-36.26 51.85c0 12.67 4.195 25.46 12.45 36.01C57.27 219.3 31.1 233.3 31.1 266c0 14.93 5.824 29.91 17.25 41.3l125 124.7C205.3 462.1 246.5 480 290.4 480s85.17-17.03 116.1-47.94l20.04-19.1c34.43-34.35 53.39-80.03 53.39-128.6V168.8C480 134.7 452.2 106.9 417.9 106.9zM447.1 283.4c0 39.77-15.83 77.92-44.02 106l-20.04 19.1c-25.78 25.72-59.65 38.59-93.52 38.59s-67.73-12.86-93.52-38.59L71.88 284.7C66.77 279.6 63.95 272.7 63.95 265.8c0-15.94 13.91-23.3 23.69-23.3c6.152 0 12.31 2.342 17 7.025l75.26 75.09c2.348 2.34 5.426 3.512 8.502 3.512c6.464 0 12.02-5.195 12.02-11.99c0-3.07-1.173-6.141-3.52-8.482l-108-107.8C83.77 194.8 80.96 187.9 80.96 181c0-15.94 13.9-23.3 23.69-23.3c6.154 0 12.31 2.344 17 7.027L230.9 273.8C233.3 276.1 236.3 277.3 239.4 277.3c6.506 0 12.02-5.241 12.02-11.1c0-3.07-1.174-6.14-3.521-8.482L122.9 132.1C117.8 126.1 114.1 120 114.1 113.2c0-15.94 13.91-23.3 23.68-23.3c6.154 0 12.31 2.342 17 7.025l126.3 125.1c2.348 2.342 5.426 3.514 8.502 3.514c6.523 0 12.02-5.248 12.02-11.1c0-3.07-1.173-6.141-3.519-8.485l-108-107.8C185.8 93.03 182.1 86.07 182.1 79.23c0-15.83 13.71-23.3 23.68-23.3c6.154 0 12.31 2.344 17 7.027L375.3 214.3c1.5 1.5 3.348 2.17 5.158 2.17c3.791 0 7.428-2.938 7.428-7.371V170.4c0-5.65 4.392-31.57 30.05-31.57c16.61 0 30.05 13.42 30.05 29.99V283.4zM80 416C53.53 416 32 394.5 32 368C32 359.2 24.84 352 16 352S0 359.2 0 368C0 412.1 35.88 448 80 448C88.84 448 96 440.8 96 432S88.84 416 80 416z"></path></svg>
            <h5 className="mt-4 uppercase text-primary-400">Bienvenue</h5>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Entrer vos information de connexion
            </p>
          </div>
          <div>{state.message && <p>{state.message}</p>}</div>

          <div className="mt-6 flex flex-col gap-5">
            <div>
              <label className="label mb-1">Email Or Username</label>
              <input
                value={email}
                type="email"
                className="input"
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
              <label className="label mb-1">Password</label>
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
          <div></div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5"></div>
            <a
              href="#"
              className="text-sm text-primary-500 hover:underline"
              onClick={toggleForgotPassword}
            >
              Mot de passe oublié ?
            </a>
          </div>
            <div className="mt-8">
                <button  onClick={handleLogin} disabled={!formValid} className="btn btn-primary w-full py-2.5">Se connecter</button>
          </div>
        </div>
      </div>
              </main>**/}
    </>
  );
};
export default LoginPage;
