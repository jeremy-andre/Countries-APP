export const nameError = (name) => {
  return !name.trim()
    ? "El nombre no puede estar vacío"
    : !/^[a-zA-Z\s]+$/.test(name)
    ? "El nombre solo puede contener letras y espacios"
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
