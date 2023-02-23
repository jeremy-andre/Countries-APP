import axios from "axios";
import { useState } from "react";

const Form = () => {
  
  const [form, setForm] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const [errors, setErrors] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: "",
  });

  const validate = (form) => {
    
  }

  const submitHandler = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3001/activities', form).then(res=>alert)
  }

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
      <div>
        <label>Dificulty: </label>
        <input
          type="text"
          value={form.dificulty}
          onChange={changeHandler}
          name="dificulty"
        />
      </div>
      <div>
        <label>Duration: </label>
        <input
          type="text"
          value={form.duration}
          onChange={changeHandler}
          name="duration"
        />
      </div>
      <div>
        <label>Season: </label>
        <input
          type="text"
          value={form.season}
          onChange={changeHandler}
          name="season"
        />
      </div>
      <div>
        <label>Countries: </label>
        <input
          type="text"
          value={form.countries}
          onChange={changeHandler}
          name="countries"
        />
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
