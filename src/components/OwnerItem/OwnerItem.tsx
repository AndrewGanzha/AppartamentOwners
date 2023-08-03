import { Button } from "../Button";

interface OwnerItemProps {
  Name: string;
  City: string;
  Date: string;
  Age: string;
  Child: boolean;
}

export const OwnerItem = ({ Name, City, Date, Age, Child }: OwnerItemProps) => {
  return (
    <li className="border-2 border-cyan-400 m-5 p-5 text-xl flex items-center place-content-around">
      <div>
        <h2>Имя владельца: {Name}</h2>
        <p>Место рождения: {City}</p>
        <p>Дата заселения: {Date}</p>
        <p>Возраст: {Age}</p>
        <p>Есть ли дети: {Child ? "да" : "нет"}</p>
      </div>
      <Button>Удалить пользователя</Button>
    </li>
  );
};
