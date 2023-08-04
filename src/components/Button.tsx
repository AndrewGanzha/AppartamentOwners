import { Button } from "@mui/material";
interface ButtonProps {
  children: string;
  deleteOwner: (id: string) => Promise<void>;
  id: string;
}

export const DeleteButton = ({ children, deleteOwner, id }: ButtonProps) => {
  return <Button onClick={() => deleteOwner(id)}>{children}</Button>;
};
