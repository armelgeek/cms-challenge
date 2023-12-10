import React, { useReducer } from "react";
import sdk from "../../utils/api-sdk/index";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import CodeVerification from "./CodeVerification";
import StepDots from "./StepDots";
import { FaArrowCircleLeft, FaArrowCircleRight, FaArrowLeft } from "react-icons/fa";
const initialState = {
  email: "",
  code: "",
  newPassword: "",
  errorMessage: "",
  successMessage: "",
  step: 0, // ajout d'une nouvelle propriété pour garder une trace de l'étape actuelle
};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "updateEmail":
      return { ...state, email: action.payload };
    case "updateCode":
      return { ...state, code: action.payload };
    case "updateNewPassword":
      return { ...state, newPassword: action.payload };
    case "setError":
      return { ...state, errorMessage: action.payload };
    case "setSuccess":
      return { ...state, successMessage: action.payload };
    case "prevStep":
      return { ...state, step: state.step - 1 == 0 ? 0 : state.step - 1 };
    case "nextStep":
      return { ...state, step: state.step + 1 > 2 ? 2 : state.step + 1 };
    default:
      return state;
  }
};
const ForgotResetPassword = () => {
  let steps = [0, 1, 2];
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleResetPassword = async () => {
    try {
      let requestObj = sdk.resetPasswordHandle(state.email).promise;
      requestObj
        .then((response: any) => {
          dispatch({ type: "setSuccess", payload: response.message });
          console.log("reset password reset avec succès");
        })
        .catch((error: any) => {
          dispatch({ type: "setSuccess", payload: error.message });
        });
    } catch (error: any) {
      //console.log(error);
      console.log("Une erreur s'est produite");
      dispatch({ type: "setSuccess", payload: error.message });
    }
  };

  return (
    <>
      <div className="flex flex-row mt-12 justify-center  mb-2 sticky  top-0">
        {steps.map((v, index) => (
          <div className="flex flex-row items-center gap-3" key={index}>
            <div className='flex flex-row gap-2 p-1 border-gray-300 items-center'>
              {index != 0 && <div className={`grow border-t border-gray-300 w-16 border-${index == state.step ? 'primary-500' : 'gray-300'}`}></div>}
              <div className={`flex flex-row justify-center items-center cursor-pointer  bg-${state.step >= index ? 'primary-500 text-white' : 'white'} w-8 h-8 border rounded-full`}>{v}</div>
            </div>
          </div>
        ))}
      </div>

      {state.step === 0 && (
        <ForgotPassword
          state={state}
          dispatch={dispatch}
          handleResetPassword={handleResetPassword}
        />
      )}
      {state.step === 1 && (
        <CodeVerification
          state={state}
          dispatch={dispatch}
          handleResetPassword={handleResetPassword}
        />
      )}
      {state.step === 2 && (
        <ResetPassword
          state={state}
          dispatch={dispatch}
          handleResetPassword={handleResetPassword}
        />
      )}
    </>
  );
};
export default ForgotResetPassword;
