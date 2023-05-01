import { Link } from "react-router-dom";
import styles from '../NavBar/NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.list}>
      <Link className={styles.countries} to={'/'}>HENRYCOUNTRIES</Link>
      <Link className={styles.home} to={"/home"}>HOME </Link>
      <Link className={styles.activity} to={"/create"}>CREATE ACTIVITY</Link>

      </div>
      <hr />
    </div>
  );
};

export default NavBar;
