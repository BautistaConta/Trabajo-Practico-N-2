// BASE DE DATOS SIMULADA
const baseDeDatos = (() => {
    let tareas = [];
  
    return {
      guardar: (tarea) => {
        tareas.push(tarea); // Mantenibilidad ✔
      },
      listar: () => tareas
    };
  })();
  