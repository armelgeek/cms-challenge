import sdk from "../../utils/api-sdk/index";
import React, {
  isValidElement,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import PasswordToggleTextInput from "./PasswordToggleTextInput";
import { MdOutlineWavingHand } from "react-icons/md";
interface ErrorProps {
  errorMessages: any[];
}
const ErrorMessages = ({ errorMessages }: ErrorProps) => {
  return (
    <div
      style={{
        marginBottom: 5,
      }}
    >
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

const RegisterPage = ({ state, dispatch, toggleCodeActivation, children }: any) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

      return;
    }
    try {
      let requestObj = sdk.registerHandle(
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
          if (response.code == 409 || response.code == 400) return;
          toggleCodeActivation();
          //toast("Utilisateur crée avec succès");
        })
        .catch((error) => {
          dispatch({ type: "SET_MESSAGE", payload: error.message });
          return;
        });
    } catch (error: any) {
      dispatch({ type: "SET_MESSAGE", payload: error.message });
      return;
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="mt-1 rounded-md bg-white border py-7 px-6 w-1/2">
        <div className="flex flex-col justify-center items-center">
          <div className="icon-login mb-2">
            <MdOutlineWavingHand className="text-primary-500" size={40} />
          </div>
          <h1 className="text-xl font-semibold text-center">Créer un compte</h1>
        </div>
        {state.message && <p>{state.message}</p>}
        <div>
          <div className="mt-1">
            <div className="mt-5 flex flex-row gap-2 justify-center items-center">
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
            <div className="grid gap-y-2">
              <label htmlFor="username" className="text-gray-700 mt-2">Nom d'utilisateur</label>
              <div className="input-username">
                <input
                  id="username"
                  className="text-sm  h-10 w-1/2 border border-gray-300 items-center rounded-primary bg-slate-50 px-3 dark:border-transparent dark:bg-slate-700 sm:flex"
                  type="text"
                  name="text"
                  placeholder="Nom d'utilisateur"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  autoCapitalize="none"
                />
              </div>
              <label htmlFor="email" className="text-gray-700 mt-2">Adresse e-mail</label>
              <div className="input-email">
                <input
                  id="email"
                  className="text-sm  h-10 w-1/2 border border-gray-300 items-center rounded-primary bg-slate-50 px-3 dark:border-transparent dark:bg-slate-700 sm:flex"
                  type="text"
                  name="text"
                  placeholder="Nom d'utilisateur"
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
              <div className="flex flex-1 mt-2 flex-row gap-3 justify-center items-center">
                <div className="w-1/2">
                  <label className="text-gray-700">Mot de passe</label>
                  <div className="input-password">
                    <PasswordToggleTextInput
                      placeholder="Mot de passe"
                      secureTextEntry={true}
                      value={password}
                      onChangeText={(e: any) => {
                        setPassword(e.target.value);
                        dispatch({ type: "SET_PASSWORD", payload: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="text-gray-700 h-6"></div>
                  <div className="input-password">
                    <PasswordToggleTextInput
                      placeholder="Confirmation de Mot de passe"
                      secureTextEntry={true}
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                    />
                  </div>
                </div>
              </div>

            </div>
            <div className="mt-3">
              <button type="submit" onClick={handleRegister} className="w-full  rounded-md">
                <div className="btn btn-base btn-primary  w-full">Créer un compte</div>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
