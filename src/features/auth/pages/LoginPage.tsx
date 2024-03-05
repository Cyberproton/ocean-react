import logo from "@/assets/logo-and-label.svg";
import { OutlinedInput } from "@/components/Input";
import { Spinner } from "@/components/Spinner";
import { AppRoute } from "@/routes/routes";
import { AppState, useAppDispatch } from "@/stores/store";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/login";
import { passwordSlice } from "../stores/password-slice";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const showPassword = useSelector(
    (state: AppState) => state.password.showPassword
  );
  const toggleShowPassword = () => {
    dispatch(passwordSlice.actions.toggleShowPassword());
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex flex-1 flex-col justify-center items-center">
        <img className="w-64" src={logo} alt="logo" />
        <p className="text-3xl text-center font-bold my-8">
          Login to your account
        </p>
        <form className="w-full">
          <OutlinedInput
            label="Email"
            inputProps={{
              type: "email",
              placeholder: "Enter your email",
            }}
          />
          <OutlinedInput
            label="Password"
            inputProps={{
              type: showPassword ? "text" : "password",
              placeholder: "Enter your password",
            }}
            endAdornment={
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleShowPassword();
                }}
              >
                {showPassword ? <Eye /> : <EyeSlash />}
              </button>
            }
          />
        </form>
        <button className="button px-0 my-2 self-start">Reset password?</button>
        <button
          className="button-filled w-full my-6"
          onClick={() => {
            login({
              email: "",
              password: "password",
            });
            navigate(AppRoute.HOME);
          }}
        >
          <Spinner />
        </button>
        <div className="flex flex-row items-center">
          <p>Don't have an account?</p>
          <button className="button ml-2">Register now</button>
        </div>
      </div>
    </div>
  );
};
