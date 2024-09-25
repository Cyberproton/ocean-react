import { SideMenu } from "@/components/SideMenu";
import { useAuth } from "@/features/auth/hooks/auth";
import { User } from "@phosphor-icons/react";
import { useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const UserButton = () => {
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
      <SheetTrigger asChild>
        {auth.isAuthenticated ? (
          <Avatar className="h-8 w-8 mx-4">
            <AvatarImage src="https://avatars.githubusercontent.com/u/66234343?v=4" />
          </Avatar>
        ) : (
          <User className="h-8 w-8 mx-4" />
        )}
      </SheetTrigger>
      <SheetContent className="px-0">
        <SideMenu
          onLogout={() => {
            setIsOpen(false);
          }}
        />
      </SheetContent>
    </Sheet>
  );
};
