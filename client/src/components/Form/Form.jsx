import axios from "axios";
import { useState } from "react";
import {
  difficultyError,
  durationError,
  nameError,
} from "./Helper/formValidation";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    difficulty: 1,
    duracion: 1,
    temporada: "Spring",
    idPais: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duracion: "",
    season: "",
    countries: "",
  });

  //--Este_Cambia_los_estados--------------------------
  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const hasErrors = Object.values(errors).some((error) => error !== ""); // TIENE ERRORES? TRUE o FALSE
      if (!hasErrors) {
        await axios.post("http://localhost:3001/activities", form);
        console.log("TODO PERFECT");
        event.target.reset();
      } else console.log("HAY UN ERROR");
    } catch (error) {
      console.log(error);
    }
  };

  const validate = (form) => {
    const nameErrorValidated = nameError(form.name);
    const difficultyErrorValidated = difficultyError(form.difficulty);
    const durationErrorValidated = durationError(form.duracion);

    setErrors({
      name: nameErrorValidated,
      difficulty: difficultyErrorValidated,
      duracion: durationErrorValidated,
    });
  };

  console.log(errors);
  console.log(form);
  //-------------------------------------------------------------------------

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Activity name: </label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
      </div>
      {errors.name && <span>{errors.name}</span>}
      <div>
        <label>Dificulty: </label>
        <input
          type="number"
          value={form.difficulty}
          onChange={changeHandler}
          name="difficulty"
        />
      </div>
      {errors.difficulty && <span>{errors.difficulty}</span>}
      <div>
        <label>Duration: </label>
        <input
          type="number"
          value={form.duracion}
          onChange={changeHandler}
          name="duracion"
        />
      </div>
      {errors.duracion && <span>{errors.duracion}</span>}
      <div>
        <label>Season: </label>
        <select
          value={form.temporada}
          onChange={changeHandler}
          name="temporada"
        >
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fal">Fal</option>
          <option value="Winter">Winter</option>
        </select>
      </div>
      <div>
        <label>idPais: </label>
        <input
          type="text"
          value={form.idPais}
          onChange={changeHandler}
          name="idPais"
        />
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
