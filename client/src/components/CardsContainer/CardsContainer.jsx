import Card from "../Card/Card";
import { useSelector } from "react-redux";
import styles from "./CardsContainer.module.css";

const CardsContainer = () => {
  //--SOLO_QUIERE_RECIBIR_LOS_PAISES_PARA_RENDERIZARLOS_,_NO_QUIERE_TANTA_WEVADA_XD_PORFAVORCITO--
  const countriesRender = useSelector((state) => state.countriesFilter);

  //console.log(countriesRender);

  const countriesPerPage = countriesRender.slice(0, 10);
  //console.log(countriesPerPage)

  return (
    <div className={styles.container}>
      {countriesPerPage.map((country) => {
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
