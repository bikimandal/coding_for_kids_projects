import React from "react";
import LogoImage from "../assets/img/logo-rcld.png"; // Ensure the path to the logo is correct

const Logo: React.FC = () => {
  return (
    <div className="logo-container mb-6">
      <img src={LogoImage} alt="Logo" className="w-32 h-32 mx-auto" />
    </div>
  );
};

export default Logo;
