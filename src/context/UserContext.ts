import { createContext } from "react";

export type User = {
  userId: string;
  email: string;
  firstname: string;
  lastname: string;
};

export type UserContextProps = {
  user: User | null;
  setUser?: (_: User) => void;
  removeUser?: () => void;
};

export const UserContext = createContext<UserContextProps>({
  user: null,
});
