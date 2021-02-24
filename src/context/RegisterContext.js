import React, { createContext, useState } from "react";

export const RegisterContext = createContext();

const RegisterContextProvider = () => {
  const [signUpInput, setSignupInput] = useState({
    phone_number: "",
    country_code: "",
    password: "",
    confirm_password: "",
  });
  return <></>;
};

export default RegisterContextProvider;
