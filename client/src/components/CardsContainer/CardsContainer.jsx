import Card from "../Card/Card";
import { useSelector } from "react-redux";
import styles from "./CardsContainer.module.css";

const CardsContainer = () => {
  const countries = useSelector((state) => state.countries);
  return (
    <div className={styles.container}>
      {countries.map((country) => {
        return (
          <Card
            key={country.id}
            image={country.image}
            name={country.name}
            continent={country.continent}
            idPais={country.id}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
