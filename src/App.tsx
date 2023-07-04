import { Header } from "./components/Header";
import { OwnersList } from "./components/OwnersList";

export const App = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <OwnersList />
      </div>
    </>
  );
};
