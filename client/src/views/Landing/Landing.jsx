import { Link } from "react-router-dom";
import styles from "../Landing/Landing.module.css";
import mapaMundo from "../../images/mapaMundo.jpg";

const Landing = () => {
  return (
    <div className={styles.total}>
      <div className={styles.container}>
        <h1>Individual Proyect Henry Countries</h1>
        <Link to={"home"} className={styles.enlaceHome}>
          HOME
        </Link>
        <h1>Developed by <span className={styles.letraNaranja}>Jeremy Flores</span></h1>
        <img
          src={mapaMundo}
          alt="Fondo del componente"
          className={styles.fondo}
        />
      </div>
    </div>
  );
};

export default Landing;
