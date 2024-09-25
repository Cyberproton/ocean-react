import { AppState, useAppDispatch } from "@/stores/store";
import { Eye, EyeClosed, Lock, User } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import logo from "@/assets/logo-and-label.svg";
import { Spinner } from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useRegisterMutation } from "@/features/auth/api/register";
import { registerSlice } from "@/features/auth/stores/register-slice";
import { AppRoute } from "@/routes/routes";
import { useSelector } from "react-redux";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [register, { isLoading }] = useRegisterMutation();

  const registerState = useSelector((state: AppState) => state.registerInput);

  const toggleShowPassword = () => {
    dispatch(registerSlice.actions.toggleShowPassword());
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex flex-1 flex-col justify-center items-center">
        <img className="w-48" src={logo} alt="logo" />
        <p className="text-2xl text-center font-bold my-8">
          Create your account
        </p>
        <form className="grid w-full gap-4">
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="Email"
              placeholder="Enter your email"
              onChange={(e) =>
                dispatch(registerSlice.actions.updateEmail(e.target.value))
              }
              startAdornment={<User />}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type={registerState.showPassword ? "text" : "password"}
              placeholder="Enter your password"
              onChange={(e) => {
                dispatch(registerSlice.actions.updatePassword(e.target.value));
              }}
              startAdornment={<Lock />}
              endAdornment={
                registerState.showPassword ? (
                  <Eye onClick={toggleShowPassword} />
                ) : (
                  <EyeClosed onClick={toggleShowPassword} />
                )
              }
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="password">Retype password</Label>
            <Input
              id="password"
              type={registerState.showPassword ? "text" : "password"}
              placeholder="Retype your password"
              onChange={(e) => {
                dispatch(
                  registerSlice.actions.updateRetypedPassword(e.target.value)
                );
              }}
              startAdornment={<Lock />}
              endAdornment={
                registerState.showPassword ? (
                  <Eye onClick={toggleShowPassword} />
                ) : (
                  <EyeClosed onClick={toggleShowPassword} />
                )
              }
            />
          </div>
        </form>
        <div className="mt-10 w-full">
          <p className="text-sm">
            By clicking the button below, you agree to our
          </p>
          <Button variant="link" className="px-0" onClick={() => {}}>
            Terms of Service and Privacy Policy
          </Button>
        </div>
        <Button
          className="w-full my-3"
          onClick={() => {
            register({
              email: registerState.email,
              password: registerState.password,
            })
              .unwrap()
              .then(() => {
                navigate(AppRoute.LOGIN);
                //dispatch(registerSlice.actions.reset());
              })
              .catch(() => {
                toast({
                  title: "Invalid email or password",
                  variant: "destructive",
                });
              });
          }}
        >
          {false ? <Spinner /> : "Register"}
        </Button>
        <div className="flex flex-row items-center">
          <p className="text-sm">Already have an account?</p>
          <Button
            variant="link"
            className="px-2"
            onClick={() => navigate(AppRoute.LOGIN)}
          >
            Login now
          </Button>
        </div>
      </div>
    </div>
  );
};
