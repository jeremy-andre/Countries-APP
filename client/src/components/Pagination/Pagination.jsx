import { useEffect, useState } from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import styles from "../Pagination/Pagination.module.css";
import { setCurrentPages } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Pagination = ({ countriesFiltered }) => {
  const dispatch = useDispatch();
  // console.log(countriesFiltered);
  const currentPage = useSelector((state) => state.currentPage);

  // // Calcula el número total de páginas sabiendo que ingresan 10 en cada pagina----------
  const totalPages = Math.ceil(countriesFiltered.length / 10);

  // //--MI_USEEFFECT_HACE_QUE_CADA_VEZ_QUE_ALGUIEN_INTERACCTUE_LE_MUESTRE_SIEMPRE_LA_PRIMERA_PAGINA--
  useEffect(() => {
    if (totalPages) {
      dispatch(setCurrentPages(1));
    }
  }, [totalPages]);

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const onPageChange = (pageNumber) => {
    dispatch(setCurrentPages(pageNumber));
  };

  // Cambia a la página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPages(currentPage - 1));
    }
  };

  // Cambia a la página siguiente
  const nextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPages(currentPage + 1));
    }
  };
  console.log(totalPages);
  // console.log(currentPage);
  //console.log(currentCountries);

  return (
    <div>
      {currentPage === 1 && ""}
      {currentPage > 1 && (
        <button className={styles.pagination} onClick={prevPage}>
          Prev
        </button>
      )}

      {pages.map((page) => (
        <button
          className={`${styles.pagination} ${
            currentPage === page ? styles.active : ""
          }`}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      {currentPage === totalPages && ""}
      {currentPage !== totalPages && (
        <button className={styles.pagination} onClick={nextPage}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
