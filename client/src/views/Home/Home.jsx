import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Filter from "../../components/Filter/Filter";
//--RECIEN_COLOCADO--------------------------------------------
// import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
//-----------------------------------------------------------
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <div>Home</div>
      <Pagination />
      <Filter />
      <CardsContainer />
    </div>
  );
};

export default Home;
