import { Button, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { AddForm } from "./OwnerItem/AddForm";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid grey",
  boxShadow: 24,
  p: 4,
};

export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <header className="container text-center">
      <Typography variant="h3">Владельцы квартир</Typography>
      <AddForm />
    </header>
  );
};
