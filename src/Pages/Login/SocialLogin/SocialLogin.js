import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (user) {
    console.log(user);
    navigate("/");
  }

  return (
    <div className="">
      <button
        onClick={() => signInWithGoogle()}
        className="btn border w-full max-w-sm flex items-center hover:border-0 bg-white text-black  hover:text-white hover:bg-netural-700 font-bold"
      >
        <FcGoogle className="text-xl mr-2" /> Continue With Google
      </button>
    </div>
  );
};

export default SocialLogin;
