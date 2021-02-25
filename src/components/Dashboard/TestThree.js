import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const TestThree = () => {
    const {values, setValues} = useContext(UserContext)
  return <p>hello test three {values}</p>;
};

export default TestThree;
