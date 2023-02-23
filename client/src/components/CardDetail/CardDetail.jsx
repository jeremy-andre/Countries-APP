import { useSelector } from "react-redux";

const CardDetail = () => {
  const country = useSelector((state) => state.country);

  if(country.id)
   return (
      <div>
        <img src={country.image} alt="" />
        <p>Id: {country.id}</p>
        <p>Name: {country.name}</p>
        <p>Continent: {country.continent}</p>
        <p>Capital: {country.capital}</p>
        <p>Subregion: {country.subregion}</p>
        <p>Area: {country.area}</p>
        <p>Population: {country.population}</p>
      </div>
    );
  else return'NO HAY NADA'
};

export default CardDetail;
