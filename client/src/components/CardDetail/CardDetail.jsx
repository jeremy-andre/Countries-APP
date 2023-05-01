import { useSelector } from "react-redux";
import styles from "../CardDetail/CardDetail.module.css";

const CardDetail = () => {
  const country = useSelector((state) => state.country);
  if (country.id)
    return (
      <div>
        <div className={styles.container}>
          <img className={styles.img} src={country.image} alt="" />
          <div className={styles.box}>
            <div className={styles.info}>
              <div className={styles.label}>ID:</div>
              <div className={styles.itemInfo}>{country.id}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.label}>Name:</div>
              <div className={styles.itemInfo}>{country.name}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.label}>Continent:</div>
              <div className={styles.itemInfo}>{country.continent}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.label}>Capital:</div>
              <div className={styles.itemInfo}>{country.capital}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.label}>Subregion: </div>
              <div className={styles.itemInfo}>{country.subregion}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.label}>Area:</div>
              <div className={styles.itemInfo}>{country.area} km²</div>
            </div>
            <div className={styles.info}>
              <div className={styles.label}>Population:</div>
              <div className={styles.itemInfo}>{country.population}</div>
            </div>
          </div>
        </div>
        <div className={styles.labelActivities}>
          <div>Actividades relacionadas:</div>
        </div>
        {country.activities.length < 1 && (
          <div className={styles.nothing}>
            Este pais no tiene Actividades Relacionadas
          </div>
        )}
        <div className={styles.activities}>
          {country.activities.length > 0 &&
            country.activities.map((c) => (
              <div key={c.id} className={styles.activity}>
                <div className={styles.nameAct}>{c.name}</div>
                <div className={styles.infoAct}>
                  <label>Duration in hours</label>
                  <div>{c.duracion}</div>
                </div>
                <div className={styles.infoAct}>
                  <label>Dificult (1-5)</label>
                  <div>{c.difficulty}</div>
                </div>
                <div className={styles.infoAct}>
                  <label>Season</label>
                  <div>{c.temporada}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  else
    return (
      <div className={styles.nothingToShow}>No hay Paises por renderizar</div>
    );
};

export default CardDetail;
