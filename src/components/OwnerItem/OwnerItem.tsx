export const OwnerItem = ({ ...props }) => {
  return (
    <li className="border-2 border-cyan-400 m-5 p-5 text-xl">
      <h2>Имя владельца: {props.Name}</h2>
      <p>Место рождения: {props.City}</p>
      <p>Дата заселения: {props.Date}</p>
      <p>Возраст: {props.Age}</p>
      <p>Есть ли дети: {props.Child ? "да" : "нет"}</p>
    </li>
  );
};
