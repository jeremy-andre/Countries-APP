import Card from "../Card/Card";
import { useSelector } from "react-redux";
import styles from "./CardsContainer.module.css";
// import filterCountries from "../../Utilities/filterCountries";


const CardsContainer = () => {
  //--SOLO_QUIERE_RECIBIR_LOS_PAISES_PARA_RENDERIZARLOS_,_NO_QUIERE_TANTA_WEVADA_XD_PORFAVORCITO--
 // const continentFilter = useSelector((state) => state.continentFilter);
 //  const orderFilter = useSelector((state) => state.orderFilter);
 //  const populationFilter = useSelector((state) => state.populationFilter);
  const countries = useSelector((state) => state.countriesFilter);
  //console.log(a);
  //console.log(filterCountries()); 
  //console.log(countriesRender);
 // const total = filterCountries({continentFilter, orderFilter, populationFilter, countries})
  //const countriesPerPage = countriesRender.slice(0, 10);
  //console.log(countriesPerPage)

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
