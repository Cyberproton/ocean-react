import { AppRoute } from "@/routes/routes";
import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="mx-3"
      onClick={() => {
        if (
          (window.history?.length && window.history.length > 1) ||
          window.history.state?.idx
        ) {
          navigate(-1);
        } else {
          navigate(AppRoute.HOME, { replace: true });
        }
      }}
    >
      <ArrowLeft />
    </Button>
  );
};
