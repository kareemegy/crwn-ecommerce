import React from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase";

const SignIn = () => {
  const logUserGoogle = async () => {
    const {user} = await signInWithGooglePopup();
   const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logUserGoogle}>Sign In With Goole</button>
    </div>
  );
};

export default SignIn;
