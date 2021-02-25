import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {Link} from 'react-router-dom'

const TestTwo = () => {
    const {values, setValues} = useContext(UserContext)
  return(
      <>
      <p>hello test two {values}</p>
      <Link to='./testthree'>
      <small>to test three</small>
      </Link>
      <button onClick={()=>{setValues('FUCK OFF')}}>Change value</button>
      </>
  )
};

export default TestTwo;
