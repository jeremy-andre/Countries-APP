import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";


const CardsContainer = (props) => {
  //--SOLO_QUIERE_RECIBIR_LOS_PAISES_PARA_RENDERIZARLOS_,_NO_QUIERE_TANTA_WEVADA_XD_PORFAVORCITO--
//console.log(props.countriesFiltered);
  return (
    <div className={styles.container}>
      {props.countriesFiltered.map((country) => {
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
