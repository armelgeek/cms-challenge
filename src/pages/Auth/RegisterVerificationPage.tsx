import React, { useReducer, useState } from "react";
import RegisterPage from "./RegisterPage";
import CodeActivation from "./CodeActivation";

interface RegisterState {
  isLoading: boolean;
  message: string | null;
  code: number | null;
  email: string | null;
  password: string | null;
}

interface RegisterAction {
  type: string;
  payload?: any;
}

const initialState: RegisterState = {
  isLoading: false,
  message: null,
  code: null,
  email: null,
  password: null
};
const reducer = (
  state: RegisterState,
  action: RegisterAction
): RegisterState => {
  switch (action.type) {
    case "REGISTER_START":
      return { ...state, isLoading: true, message: null };
    case "SET_MESSAGE":
      return { ...state, isLoading: false, message: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, isLoading: false, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, isLoading: false, password: action.payload };
    case 'UPDATE_CODE':
        return { ...state, code: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const RegisterVerificationPage = ({toggleRegister,children}:any) => {
  const [isCodeActivationVisible, setIsCodeActivationVisible] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleCodeActivation = () => {
    setIsCodeActivationVisible(!isCodeActivationVisible);
  };
  return (
    <div>
      
      {!isCodeActivationVisible && (
        <>
          <RegisterPage state={state} dispatch={dispatch} children={children} toggleCodeActivation={toggleCodeActivation} />
        </>
      )}
      {isCodeActivationVisible && <CodeActivation state={state} dispatch={dispatch} toggleRegister={toggleRegister}/>}
      {state.isLoading && <p>Registration in progress...</p>}
     
    </div>
  );
};
export default RegisterVerificationPage;