import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to={"/home"}>HOME </Link>
      <Link to={"/create"}>Create Activity</Link>
      <hr />
    </div>
  );
};

export default NavBar;
