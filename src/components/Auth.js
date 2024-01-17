import React from "react";
import { LoginButton, SignUpButton } from "./Buttons";

const Auth = () => {
  return (
    <div className="flex items-center gap-1">
      <LoginButton />
      <SignUpButton />
    </div>
  );
};

export default Auth;
