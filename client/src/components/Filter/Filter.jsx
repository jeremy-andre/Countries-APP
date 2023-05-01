import {
  setContinentFilter,
  setOrderFilter,
  setPopulationFilter,
  setActivitySelect,
  searchCountries,
  setSearchTerm,
} from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
// import SearchBar from "../SearchBar/SearchBar";
import styles from "../Filter/Filter.module.css";

const Filter = () => {
  const continentFilter = useSelector((state) => state.continentFilter);
  const orderFilter = useSelector((state) => state.orderFilter);
  const populationFilter = useSelector((state) => state.populationFilter);
  const activitesSelect = useSelector((state) => state.activity);
  const activities = useSelector((state) => state.activities);
  const searchTerm = useSelector((state) => state.searchTerm);

  const dispatch = useDispatch();

  //AQUI_HACER_UN_SWITCH-----------------------------------------------
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    if (name === "search") {
      dispatch(setSearchTerm(value));
      dispatch(searchCountries(value));
    }
    if (name === "continent") {
      dispatch(setContinentFilter(value));
    }
    if (name === "order") {
      dispatch(setOrderFilter(value));
    }
    if (name === "population") {
      dispatch(setPopulationFilter(value));
    }
    if (name === "activity") {
      dispatch(setActivitySelect(value));
    }
    if (name === "clear") {
      dispatch(setContinentFilter(""));
      dispatch(setOrderFilter(""));
      dispatch(setPopulationFilter(""));
      dispatch(setActivitySelect(""));
      dispatch(setSearchTerm(""));
      dispatch(searchCountries(""));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          className={styles.input}
          type="text"
          value={searchTerm}
          onChange={handleFilterChange}
          placeholder="Search countries ..."
          name="search"
        />
      </div>
      {/* <SearchBar /> */}
      <div>
        <label className={styles.label}>CONTINENT: </label>
        <select
          value={continentFilter}
          onChange={handleFilterChange}
          name="continent"
        >
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctica">Antarctica</option>
        </select>
      </div>
      <div>
        <label>ORDER: </label>
        <select value={orderFilter} onChange={handleFilterChange} name="order">
          <option value="">None</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div>
        <label>POPULATION: </label>
        <select
          value={populationFilter}
          onChange={handleFilterChange}
          name="population"
        >
          <option value="">None</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>
      <div>
        <label>ACTIVITIES: </label>
        <select
          value={activitesSelect}
          onChange={handleFilterChange}
          name="activity"
        >
          <option value="">None</option>
          {activities.map((a) => (
            <option key={a.id} value={a.name}>
              {a.name}
            </option>
          ))}
        </select>
      </div>
      <button
        className={styles.button}
        onClick={handleFilterChange}
        name="clear"
      >
        CLEAR FILTERS
      </button>
    </div>
  );
};

export default Filter;
