import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";

const CardsContainer = (props) => {
  //--SOLO_QUIERE_RECIBIR_LOS_PAISES_PARA_RENDERIZARLOS_,_NO_QUIERE_TANTA_WEVADA_XD_PORFAVORCITO--
  //console.log(props.countriesFiltered);
  let exist = true;
  if (!props.finishCountries.length) {
    exist = false;
  }

  return (
    <div className={styles.container}>
      {exist &&
        props.finishCountries.map((country) => {
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
      {!exist && <h2>NO SE ENCONTRARON PAISES</h2>}
    </div>
  );
};

export default CardsContainer;
