import React, { useReducer, useState } from "react";
import OTPVerificationInput from "./OTPVerificationInput";
import { MdOutlineWavingHand } from "react-icons/md";
import sdk from "../../utils/api-sdk/index";
import { FaRedo } from "react-icons/fa";
const CodeVerification = ({ state, dispatch, handleResetPassword }: any) => {
  const handleCodeChange = (code: string) => {
    dispatch({ type: "updateCode", payload: code });
  };
  const [codeError, setCodeError] = useState(false);
  const generatePassword = () => {
    handleResetPassword();
  };
  const handleSubmit = async () => {
    try {
      let requestObj = sdk.codeVerificationHandle(
        state.email,
        state.code
      ).promise;
      requestObj
        .then((response: any) => {
          dispatch({ type: "setSuccess", payload: response.message });
          setCodeError(false);
          dispatch({ type: "nextStep" });
        })
        .catch((error: any) => {
          //console.log(error);
          setCodeError(true);
          dispatch({ type: "setSuccess", payload: error.message });
        });
    } catch (error: any) {
      //console.log(error);
      setCodeError(true);
      dispatch({ type: "setSuccess", payload: error.message });
    }
  };


  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-1 rounded-md bg-white border py-7 px-6 w-1/3">
          <div className="flex flex-col justify-center items-center">
            <div className="icon-login mb-2">
              <MdOutlineWavingHand className="text-primary-500" size={40} />
            </div>
            <h1 className="text-xl font-semibold text-center">Verification</h1>
            <p className="text-gray-500 text-sm">Enter you OPT code number</p>
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <OTPVerificationInput
              numOfInputs={4}
              onChange={handleCodeChange}
              onSubmit={handleSubmit}
            />
            <div className="flex flex-col justify-center items-center mt-2">
              {codeError && (
                <div className="flex flex-col gap-1">
                  <div className="text-code-error">
                    <p className="text-red-500 text-sm">Le code de reinialisation est invalide</p>
                  </div>
                  <div className="flex flex-row justify-center">
                    <div onClick={generatePassword} className="btn flex flex-row justify-center items-center  text-primary-500 hover:text-primary-600 text-sm"><FaRedo className="mr-2" /> Renvoyer le code  </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeVerification;
