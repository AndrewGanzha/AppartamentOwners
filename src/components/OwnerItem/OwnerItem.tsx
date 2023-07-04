interface IProps {
  Name: string;
  Age: number;
  Child: boolean;
  City: string;
  Date: string;
}

export const OwnerItem: IProps = ({ ...props }) => {
  return (
    <li>
      <h2>Имя владельца: {props.Name}</h2>
      <p>Место рождения: {props.City}</p>
      <p>Дата заселения: {props.Date}</p>
      <p>Возраст: {props.Age}</p>
      <p>Есть ли дети: {props.child ? "да" : "нет"}</p>
    </li>
  );
};
