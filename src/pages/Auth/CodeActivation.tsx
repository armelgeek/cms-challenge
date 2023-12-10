import React, { useReducer, useState } from "react";
import jwtDecode from 'jwt-decode';
import sdk from "../../utils/api-sdk/index";
import OTPVerificationInput from "./OTPVerificationInput";
const CodeActivation = ({ state, dispatch, toggleRegister }: any) => {
  const handleCodeChange = (code: string) => {
    dispatch({ type: "UPDATE_CODE", payload: code });
  };
  const generatePassword = () => {
    try {
      let requestObj = sdk.regenerateVerifyCodeHandle(state.email).promise;
      requestObj
        .then((response: any) => {
          dispatch({ type: "SET_MESSAGE", payload: response.message });
          // toast("code valid");
        })
        .catch((error) => {
          //console.log(error);
          dispatch({ type: "SET_MESSAGE", payload: error.message });
        });
    } catch (error: any) {
      //console.log(error);
      // toast("Une erreur s'est produite");
      dispatch({ type: "SET_MESSAGE", payload: error.message });
    }
  };
  const handleSubmit = async () => {
    try {
      dispatch({
        type: "SET_LOADING",
      });
      let requestObj = sdk.verifyAccountHandle(
        state.code,
        state.password
      ).promise;
      requestObj
        .then((response: any) => {
          const { accessToken, refreshToken } = response;
          const decodedToken = jwtDecode(accessToken) as any;
          if (decodedToken != null) {
            dispatch({
              type: "LOGIN_SUCCESS",
              payload: {
                accessToken,
                refreshToken,
                isAuthenticated: true,
                isLoading: false,
                user: {
                  id: decodedToken.id as string,
                  email: decodedToken.email as string,
                  username: decodedToken.username as string,
                  photo: decodedToken.photo as string,
                },
              },
            });
          }
        })
        .catch((error) => {
          //console.log("error", error.message);
          dispatch({ type: "SET_MESSAGE", payload: error.message });
        });
    } catch (error: any) {
      //console.log("error", error.message);
      dispatch({ type: "SET_MESSAGE", payload: error.message });
    }
  };

  return (
    <div
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <p>Verification </p>
        <p>Enter you OPT code number </p>
      </div>
      {state.message ? (
        <p style={{ color: "green" }}>{state.message}</p>
      ) : null}
      <OTPVerificationInput
        numOfInputs={4}
        onChange={handleCodeChange}
        onSubmit={handleSubmit}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <p>Didn't you receive any code ?</p>
        <button onClick={generatePassword}>
            Resend new code
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <button onClick={toggleRegister}>
          close
        </button>
      </div>
    </div>
  );
};

export default CodeActivation;
