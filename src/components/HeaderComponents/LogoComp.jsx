import React from "react";
import Logo from '../../public/logo.png'
import { Link } from "react-router-dom";


// aseas
const LogoComp = () => {
  return (
    <>
      <Link to="/"><img src={Logo}  className="cursor-pointer h-16" /></Link>
    </>
  );
};

export default LogoComp;
