import { Button, Checkbox, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import OwnersService from "../service/OwnerService";

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

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    date: "",
    age: 0,
    child: false,
  });

  const checkHandler = () => {
    setFormData({ ...formData, child: !formData.child });
  };

  async function addOwner(
    name: string,
    city: string,
    date: string,
    age: number,
    child: boolean
  ) {
    await OwnersService.addItem(name, city, date, age, child);
    await setOpen(false);
  }
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
          <TextField
            id="outlined-basic"
            label="Имя"
            variant="outlined"
            autoComplete="off"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            autoComplete="off"
            id="outlined-basic"
            label="Место рождения"
            variant="outlined"
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          <TextField
            autoComplete="off"
            id="outlined-basic"
            label="Дата заселения"
            variant="outlined"
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
          <TextField
            type="number"
            id="outlined-basic"
            label="Возраст"
            variant="outlined"
            autoComplete="off"
            onChange={(e) => setFormData({ ...formData, age: +e.target.value })}
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Есть ли дети
            <Checkbox onChange={checkHandler} />
          </Typography>
          <Button
            onClick={() =>
              addOwner(
                formData.name,
                formData.city,
                formData.date,
                formData.age,
                formData.child
              )
            }
            variant="outlined"
          >
            Отправить данные
          </Button>
        </Box>
      </Modal>
    </>
  );
};
