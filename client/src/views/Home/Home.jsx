import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";

import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
//import FilterCountries from "../../Utilities/FilterCountries";

//--RECIEN_COLOCADO--------------------------------------------
// import { useState } from "react";
//-----------------------------------------------------------
const Home = () => {
  // _TRAR DATAS DE LAS STORE O ESTADOS
  const countries = useSelector((state) => state.Allcountries);
  const continentFilter = useSelector((state) => state.continentFilter);
  const orderFilter = useSelector((state) => state.orderFilter);
  const populationFilter = useSelector((state) => state.populationFilter);
 
  //-- FUNCION QUE FILTRA SEGUN VAYA CAMBIANDO EL ESTADO DE LOS FILTROS ------------
  
  


  
  
  //------------------------------------------------------------------------------------------------------------
  
    
    //--aplicar_filtro_por_continent------------
    let filteredCountries = countries.filter((country) => {
      if (continentFilter === "") {
        return true;
      } else {
        return country.continent === continentFilter;
      }
    });
  
    //--aplicar_filtro_por_order----------------
    switch (orderFilter) {
      case "A-Z":
        filteredCountries.sort((a, b) => a.name.localeCompare(b.name));
        break;
        case "Z-A":
          filteredCountries.sort((a, b) => b.name.localeCompare(a.name));
          break;
          default:
            break;
          }
          
          //--aplicar_filtro_por_population-----------
          switch (populationFilter) {
            case "Ascendente":
              filteredCountries.sort((a, b) => b.population - a.population);
              break;
              case "Descendente":
                filteredCountries.sort((a, b) => a.population - b.population);
        break;
        default:
          break;
        }
        
       
      
      //------------------------------------------------------------------------------------------------------------
      
      
      const countriesFiltered = filteredCountries
      
      console.log(countriesFiltered);
      
      
      
      
      // DISPATCH A LA API PARA QUE CARGUE LOS COUNTRIES-1-------------
      const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <div>Home</div>

      <Pagination countriesFiltered={countriesFiltered} />
      <Filter />
    </div>
  );
};

export default Home;
