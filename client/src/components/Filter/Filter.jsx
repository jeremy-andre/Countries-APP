import { setContinentFilter } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Filter = () => {
  
  const continentFilter = useSelector((state)=>state.continentFilter) 
    const dispatch = useDispatch()

    const handleContinentChange = (event) => {
        dispatch(setContinentFilter(event.target.value))
     }
  return (
    <div>
      <select value={continentFilter} onChange={handleContinentChange} >
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
