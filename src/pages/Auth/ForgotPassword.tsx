import React, { useReducer } from "react";
import { MdOutlineWavingHand } from "react-icons/md";
const validateEmail = (email: any) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

const ForgotPassword = ({ state, dispatch, handleResetPassword }: any) => {
  const generatePassword = () => {
    const { email } = state;
    if (!email) {
      dispatch({
        type: "setError",
        payload: "Veuillez saisir votre adresse e-mail.",
      });
      return;
    } else if (!validateEmail(email)) {
      dispatch({ type: "setError", payload: "Adresse e-mail invalide" });
      return;
    }

    handleResetPassword();
    dispatch({ type: "nextStep" });
  };
  return (
    <div className="flex flex-col items-center justify-center">

      <div className="mt-1 rounded-md bg-white border py-7 px-6 w-1/3">
        <div className="flex flex-col justify-center items-center">
          <div className="icon-login mb-2">
            <MdOutlineWavingHand className="text-primary-500" size={40} />
          </div>
          <h1 className="text-xl font-semibold text-center">Mot de passe oublié</h1>
          <p className="text-gray-500 text-sm">Entrez votre adresse e-mail pour réinitialiser votre mot de passe.</p>
          {state.errorMessage ? <p>{state.errorMessage}</p> : null}
        </div>
        <div className="grid gap-y-2">
          <label htmlFor="username" className="text-gray-700 mt-2">Adresse e-mail</label>
          <div className="input-username">
            <input
              value={state.email}
              type="email"
              className="text-sm  h-10 w-full border border-gray-300 items-center rounded-primary bg-slate-50 px-3 dark:border-transparent dark:bg-slate-700 sm:flex"
              onChange={(e) =>
                dispatch({ type: "updateEmail", payload: e.target.value })
              }
              placeholder="Adresse e-mail"
              autoCapitalize="none"
            />
          </div>
        </div>
        <div className="mt-3">
          <button type="button" onClick={generatePassword} className="w-full  rounded-md">
            <div className="btn btn-base btn-primary  w-full"> Envoyer le code</div></button>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
