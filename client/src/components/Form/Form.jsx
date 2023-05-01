import { useState } from "react";
import {
  countriesError,
  difficultyError,
  durationError,
  nameError,
  seasonError,
} from "./Helper/formValidation";
import { useSelector, useDispatch } from "react-redux";
import { createActivity } from "../../redux/actions";
import styles from "../Form/Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  //--GET_COUNTRIES_AND_ORDER------------------------------
  const countries = useSelector((state) => state.Allcountries);
  countries.sort((a, b) => a.name.localeCompare(b.name));

  //--GET_ACTIVITIES_TO_VALIDATE---------------------------
  const Activities = useSelector((state) => state.activities);
  const nameActivities = Activities.map((activity) => activity.name);

  //--FORM_STATE_TO_SEND-----------------------------------
  const [form, setForm] = useState({
    name: "",
    difficulty: 1,
    duracion: 1,
    temporada: "",
    idPais: [],
  });

  const [errors, setErrors] = useState({
    name: "El nombre no puede estar vacío",
    difficulty: "",
    duracion: "",
    season: "La temporada es obligatoria",
    countries: "Debes agregar por lo menos un Pais para esta actividad",
  });

  //--CHANGE_AND_VALIDATE_STATES---------------------------
  const changeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "idPais") {
      if (form.idPais.includes(value)) {
        alert("Este país ya ha sido agregado.");
        return;
      } else validate({ ...form, idPais: [...form.idPais, value] });
      setForm({ ...form, idPais: [...form.idPais, value] });
    } else {
      validate({ ...form, [name]: value });
      setForm({ ...form, [name]: value });
    }
  };

  //--SUBMIT_FORM_TO_SERVER--------------------------------
  const submitHandler = (event) => {
    event.preventDefault();
    const hasErrors = Object.values(errors).some((error) => error !== ""); // TIENE ERRORES? TRUE o FALSE
    if (!hasErrors) {
      dispatch(createActivity(form));
      setForm({
        name: "",
        difficulty: 1,
        duracion: 1,
        temporada: "",
        idPais: [],
      });
      setErrors({
        name: "El nombre no puede estar vacío",
        difficulty: "",
        duracion: "",
        season: "La temporada es obligatoria",
        countries: "Debes agregar por lo menos un Pais para esta actividad",
      });
    } else alert("Faltan datos ");
  };

  //--VALIDATE_FORM_AND_SEND_ERRORS------------------------
  const validate = (form) => {
    const nameErrorValidated = nameError(form.name, nameActivities);
    const difficultyErrorValidated = difficultyError(form.difficulty);
    const durationErrorValidated = durationError(form.duracion);
    const seasonErrorValidated = seasonError(form.temporada);
    const countriesErrorValidated = countriesError(form.idPais);

    setErrors({
      name: nameErrorValidated,
      difficulty: difficultyErrorValidated,
      duracion: durationErrorValidated,
      season: seasonErrorValidated,
      countries: countriesErrorValidated,
    });
  };

  //--VALIDATE_FORM_AND_SEND_ERRORS------------------------
  const removePais = (index) => {
    const idCountryIgnore = [...form.idPais];
    idCountryIgnore.splice(index, 1);
    setForm({ ...form, idPais: idCountryIgnore });
    validate({ ...form, idPais: idCountryIgnore });
  };

  //--COUNTRIES_RENDER_SELECTED------------------------------
  const countriesSelected = countries.filter((pais) =>
    form.idPais.includes(pais.id)
  );

  //console.log(errors);
  //console.log(form);
  //-------------------------------------------------------------------------

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <form onSubmit={submitHandler}>
          <div className={styles.itemInfo}>
            <label className={styles.label}>Activity name: </label>
            <input
              className={styles.itemform}
              type="text"
              value={form.name}
              onChange={changeHandler}
              name="name"
            />
          </div>
          {errors.name && <span className={styles.span1}>{errors.name}</span>}

          <div className={styles.itemInfo}>
            <label className={styles.label}>Difficulty: </label>
            <input
              className={styles.itemform}
              type="number"
              value={form.difficulty}
              onChange={changeHandler}
              name="difficulty"
            />
          </div>
          {errors.difficulty && (
            <span className={styles.span2}>{errors.difficulty}</span>
          )}

          <div className={styles.itemInfo}>
            <label className={styles.label}>Duration: </label>
            <input
              className={styles.itemform}
              type="number"
              value={form.duracion}
              onChange={changeHandler}
              name="duracion"
            />
          </div>
          {errors.duracion && (
            <span className={styles.span3}>{errors.duracion}</span>
          )}

          <div className={styles.itemInfo}>
            <label className={styles.label}>Season: </label>
            <select
              className={styles.itemform}
              value={form.temporada}
              onChange={changeHandler}
              name="temporada"
            >
              <option value="" hidden>
                Season
              </option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
              <option value="Winter">Winter</option>
            </select>
          </div>
          {errors.season && (
            <span className={styles.span4}>{errors.season}</span>
          )}

          <div className={styles.itemInfo}>
            <label className={styles.label}>Countries:</label>
            <select
              className={styles.itemform}
              value=""
              onChange={changeHandler}
              name="idPais"
            >
              <option value="" hidden>
                All countries
              </option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          {errors.countries && (
            <span className={styles.span5}>{errors.countries}</span>
          )}

          <button className={styles.submit} type="submit">
            SUBMIT
          </button>
        </form>
      </div>

      <div className={styles.countries}>
        <h3>COUNTRIES SELECTED</h3>
        <hr />
        {countriesSelected.map((pais) => (
          <div className={styles.countrySelected} key={pais.id}>
            <img className={styles.imgSelect} src={pais.image} />
            <div className={styles.infoSelect}>{pais.name}</div>
            <div className={styles.infoSelect}>{pais.continent}</div>
            <button className={styles.buttonSelect} onClick={() => removePais(pais.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
