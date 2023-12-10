import React, { useContext, useReducer, useState } from "react";
import CodeActivation from "./CodeActivation";
import LoginPage from "./LoginPage";
import { AuthContext } from "../../store/Provider/AuthProvider";



const LoginCodeActivationPage = ({
  toggleRegister,
  children
}: any) => {
  const [isCodeActivationVisible, setIsCodeActivationVisible] = useState(false);
  const { state, dispatch } = useContext(AuthContext);
  const toggleCodeActivation = () => {
    setIsCodeActivationVisible(!isCodeActivationVisible);
  };
  return (
    <div>
      {!isCodeActivationVisible && (
        <>
          <LoginPage
              toggleRegister={toggleRegister}
              toggleCodeActivation={toggleCodeActivation}
              children={children}
          />
        </>
      )}
      {isCodeActivationVisible && (
        <CodeActivation
          state={state}
          dispatch={dispatch}
          toggleRegister={toggleCodeActivation}
        />
      )}
    </div>
  );
};
export default LoginCodeActivationPage;
