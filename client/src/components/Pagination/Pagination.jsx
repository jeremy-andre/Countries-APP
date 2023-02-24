import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardsContainer from "../CardsContainer/CardsContainer";

const Pagination = ({ countriesFiltered }) => {

  const [currentPage, setCurrentPage] = useState(1);

  // Calcula el número total de páginas sabiendo que ingresan 10 en cada pagina----------
  const totalPages = Math.ceil(countriesFiltered.length / 10);

  // Calcula el índice de inicio y final de los países de la página actual
  const start = (currentPage - 1) * 10;
  const end = start + 10;

  // Obtiene los países de la página actual
  const currentCountries = countriesFiltered.slice(start, end);

  //console.log(currentCountries);

  // Cambia a la página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Cambia a la página siguiente
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  console.log(currentCountries);

  return (
    <>
      {/* Renderiza los botones de navegación de página */}
      <button onClick={prevPage}>Prev</button>
      <button onClick={nextPage}>Next</button>
      <CardsContainer countriesFiltered={currentCountries} />
      {/* Pasa los países de la página actual a otro componente que los renderiza */}
    </>
  );
};

export default Pagination;
