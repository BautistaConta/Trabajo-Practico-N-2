// BACKEND - lógica para validar y guardar la tarea
const backend = (() => {
    const guardarTarea = (tarea) => {
      // Seguridad: validación de entrada ✔
      if (!tarea || tarea.trim() === "") {
        return "Error: La tarea no puede estar vacía."; // Seguridad ✔
      }
  
      baseDeDatos.guardar(tarea); // Escalabilidad ✔
      return `Tarea guardada: ${tarea}`; // Mantenibilidad ✔
    };
  
    return {
      procesarTarea: guardarTarea
    };
  })();
  