import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ image, name, continent,idPais }) => {
  return (
    <div className={styles.container}>
      <Link to={`detail/${idPais}`}>
        <img className={styles.containerImage} src={image} alt="country" />
      </Link>
      <div>
        <p className={styles.containerName}>Name: {name} </p>
        <p className={styles.containerCont}>continent: {continent} </p>
      </div>
    </div>
  );
};

export default Card;
