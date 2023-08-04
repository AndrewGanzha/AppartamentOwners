import { Button, Checkbox, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 380,
  bgcolor: "background.paper",
  border: "1px solid grey",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  p: 6,
  gap: 2,
  alignItems: "center",
};

export const AddForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>Добавить владельца</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Введите данные владельца
          </Typography>
          <TextField id="outlined-basic" label="Имя" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Место рождения"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Возраст" variant="outlined" />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Есть ли дети
            <Checkbox defaultChecked />
          </Typography>
          <Button variant="outlined">Отправить данные</Button>
        </Box>
      </Modal>
    </>
  );
};
