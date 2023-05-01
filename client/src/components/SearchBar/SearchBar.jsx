import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountries } from "../../redux/actions";
import styles from "../SearchBar/SearchBar.module.css";

const CountrySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    dispatch(searchCountries(event.target.value));
  };

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search countries ..."
      />
    </div>
  );
};

export default CountrySearch;
