import React, { useReducer, useState } from 'react';
import sdk from "../../utils/api-sdk/index";
import { MdOutlineWavingHand } from "react-icons/md";


const ResetPassword = ({ state, dispatch, handleResetPassword }: any) => {
    const [codeError, setCodeError] = useState(false);
    const generatePassword = () => {
        handleResetPassword();
        dispatch({ type: 'prevStep' });
    }
    const handleNewPassword = () => {
        const { code, newPassword } = state;
        try {
            let requestObj = sdk.newPasswordHandle(state.email, code, newPassword).promise;
            requestObj.then((response: any) => {
                dispatch({ type: 'setSuccess', payload: response.message });
                setCodeError(false);
            }).catch((error: any) => {
                setCodeError(true);
                dispatch({ type: 'setSuccess', payload: error.message });
            });
        } catch (error: any) {
            setCodeError(true);
            dispatch({ type: 'setSuccess', payload: error.message });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mt-1 rounded-md bg-white border py-7 px-6 w-1/3">
                <div className="flex flex-col justify-center items-center">
                    <div className="icon-login mb-2">
                        <MdOutlineWavingHand className="text-primary-500" size={40} />
                    </div>
                    <h1 className="text-xl font-semibold text-center">Reset Password</h1>
                    <p className="text-gray-500 text-sm">Saisissez votre nouvelle mot de passe</p>
                </div>
                <div className="flex flex-col gap-1 flex-1">
                    <label htmlFor="username" className="text-gray-700 mt-2">Mot de passe</label>
                    <input type="text"
                        placeholder="New Password"
                        className="text-sm  h-10 w-full border border-gray-300 items-center rounded-primary bg-slate-50 px-3 dark:border-transparent dark:bg-slate-700 sm:flex"
                        value={state.newPassword}
                        onChange={(e) => dispatch({ type: 'updateNewPassword', payload: e.target.value })}
                    />
                </div>
                <button onClick={handleNewPassword} className="btn flex flex-row text-white justify-center items-center w-full bg-primary-500 mt-2">Reset Password</button>
                <div className="flex flex-col justify-center items-center">
                    {codeError && <button onClick={generatePassword}>Nouvel code !</button>}
                </div>
                {state.errorMessage !== '' && <p>{state.errorMessage}</p>}
            </div>
        </div>
    );
};

export default ResetPassword;