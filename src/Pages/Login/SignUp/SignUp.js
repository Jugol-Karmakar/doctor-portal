import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../../Hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser);

  const navigate = useNavigate();
  let signInError;

  if (loading || gLoading || updating) {
    return <Loading />;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-600">
        <small>{error?.message || updateError?.message}</small>
      </p>
    );
  }
  if (token) {
    navigate("/");
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  return (
    <div className="bg-[#eef1f1]">
      <div className="container min-h-screen mx-auto px-20 flex flex-col justify-center items-center py-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-3xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-gray-600">
                    Name
                  </span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-gray-600">
                    Email
                  </span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-gray-600">
                    Password
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <input
                type="submit"
                value="SignUp"
                className="w-full bg-blue-600 text-lg text-white font-bold py-3 rounded-lg cursor-pointer"
              />
            </form>
            <div className="my-2">
              <button
                onClick={() => signInWithGoogle()}
                className="btn border border-gray-400 hover:border-gray-400 w-full max-w-sm flex rounded-full items-center bg-white text-gray-700 hover:bg-green-50 font-bold"
              >
                <FcGoogle className="text-xl mr-2" /> Continue With Google
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl py-3 mt-3">
          <p className="text-center font-bold text-gray-700">
            <Link to="/signin">
              Already a Member?<span className="text-blue-600"> Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
