import Typography from "@mui/material/Typography";
import { AddForm } from "../components/AddForm";


export const Header = () => {
  return (
    <header className="container text-center">
      <Typography variant="h3">Владельцы квартир</Typography>
      <AddForm />
    </header>
  );
};
