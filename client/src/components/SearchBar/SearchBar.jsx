import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountries } from "../../redux/actions";

const CountrySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchCountries(searchTerm));
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CountrySearch;
