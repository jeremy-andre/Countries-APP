import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Pagination = () => {
  // const totalElements = filterCountries({
  //  countries,
  //  continentFilter,
  //  orderFilter,
  //  populationFilter,
  // }).length;

  //console.log(totalElements)

  const totalElements = 250;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(10);

  // console.log(currentPage)

  const indexOfLastElement = currentPage * elementsPerPage; // 1 * 10
  const indexOfFirstElement = indexOfLastElement - elementsPerPage; // 10 - 10

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    //250 / 10 = 25 veces de paginas
    pageNumbers.push(i);
  }

  //console.log(pageNumbers);

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <div key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
