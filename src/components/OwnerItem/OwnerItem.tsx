import { DeleteButton } from "../Button";
import OwnersService from "../../service/OwnerService";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

interface OwnerItemProps {
  Name: string;
  City: string;
  Date: string;
  Age: string;
  Child: boolean;
  id: string;
}

export const OwnerItem = ({
  Name,
  City,
  Date,
  Age,
  Child,
  id,
}: OwnerItemProps) => {
  async function deleteOwner(id: string) {
    const response = await OwnersService.deleteItem(id);
  }

  return (
    <Box
      sx={{
        p: 2,
        width: 400,
        height: 250,
        bgcolor: "background.paper",
        border: "1px solid grey",
      }}
    >
      <Stack direction="column" alignItems="flex-start">
        <div>
          <Typography gutterBottom variant="h4" component="div">
            Имя владельца: {Name}
          </Typography>
        </div>
        <div>
          <Typography color="text.secondary" variant="body2">
            Место рождения: {City}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Дата заселения: {Date}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Возраст: {Age}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Есть ли дети: {Child ? "да" : "нет"}
          </Typography>
        </div>
        <DeleteButton deleteOwner={deleteOwner} id={id}>
          Удалить пользователя
        </DeleteButton>
      </Stack>
    </Box>
  );
};
