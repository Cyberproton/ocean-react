import logo from "@/assets/logo-and-label.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { AppRoute } from "@/routes/routes";
import { AppState, useAppDispatch } from "@/stores/store";
import { Eye, EyeClosed, Spinner } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/login";
import { loginInputSlice } from "../stores/password-slice";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const loginInput = useSelector((state: AppState) => state.loginInput);
  const toggleShowPassword = () => {
    dispatch(loginInputSlice.actions.toggleShowPassword());
  };
  const updateEmail = (email: string) => {
    dispatch(loginInputSlice.actions.updateEmail(email));
  };
  const updatePassword = (password: string) => {
    dispatch(loginInputSlice.actions.updatePassword(password));
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex flex-1 flex-col justify-center items-center">
        <img className="w-48" src={logo} alt="logo" />
        <p className="text-2xl text-center font-bold my-8">
          Login to your account
        </p>
        <form className="grid w-full gap-4">
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="Email"
              placeholder="Enter your email"
              onChange={(e) => updateEmail(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type={loginInput.showPassword ? "text" : "password"}
              placeholder="Enter your password"
              onChange={(e) => updatePassword(e.target.value)}
              endAdornment={
                loginInput.showPassword ? (
                  <Eye onClick={toggleShowPassword} />
                ) : (
                  <EyeClosed onClick={toggleShowPassword} />
                )
              }
            />
          </div>
        </form>
        <Button variant="link" className="self-start px-0 mt-3">
          Reset password?
        </Button>
        <Button
          className="w-full my-6"
          onClick={() => {
            login({
              email: loginInput.email,
              password: loginInput.password,
            })
              .unwrap()
              .then(() => {
                navigate(AppRoute.HOME);
                dispatch(loginInputSlice.actions.reset());
              })
              .catch(() => {
                toast({
                  title: "Invalid email or password",
                  variant: "destructive",
                });
              });
          }}
        >
          {isLoading ? <Spinner /> : "Login"}
        </Button>
        <div className="flex flex-row items-center">
          <p className="text-sm">Don't have an account?</p>
          <Button
            variant="link"
            className="px-2"
            onClick={() => navigate(AppRoute.REGISTER)}
          >
            Register now
          </Button>
        </div>
      </div>
    </div>
  );
};
