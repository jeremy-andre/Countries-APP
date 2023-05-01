export const nameError = (name, nameActivities) => {
  return !name.trim()
    ? "El nombre no puede estar vacío"
    : !/^[a-zA-Z\s]+$/.test(name)
    ? "El nombre solo puede contener letras y espacios"
    : nameActivities.includes(name)
    ? `La actividad con el nombre de ${name} ya a sido creada, por favor ingresa otro nombre`
    : "";
};

export const difficultyError = (difficulty) => {
  return !difficulty
    ? "La dificultad es obligatoria"
    : !Number.isInteger(Number(difficulty))
    ? "La dificultad debe ser un número entero"
    : difficulty < 1 || difficulty > 5
    ? "La dificultad debe ser un número entre 1 y 5"
    : "";
};

export const durationError = (duracion) => {
  return !duracion
    ? "La duración es obligatoria"
    : !Number.isInteger(Number(duracion))
    ? "La duracion debe ser un número entero"
    : isNaN(duracion) || duracion < 1 || duracion > 24
    ? "La duración debe ser un numero entre 1 y 24"
    : "";
};

export const countriesError = (idPais) => {
  return idPais.length === 0
    ? "Debes agregar por lo menos un Pais para esta actividad"
    : "";
};

export const seasonError = (season) => {
  return !season ? "La temporada es obligatoria" : "";
};
