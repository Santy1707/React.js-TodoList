import React, {useState, useEffect} from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import '../../styles/task.scss'

/**
 * Importamo la hoja de estilos task.css
 */

const TaskListComponent = () => {

  
  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

  // Estado del componente 
  const [tasks, setTasks] = useState([defaultTask])
  const [loading, setLoading] = useState(true);

  // Control del Ciclo de vida del componente
  useEffect(() => {
    console.log('Tasks state has been modified')
    setLoading(false);
    return () => {
      console.log('Task list component is going to unmount....')
    };
  }, [tasks]);
  
  const changeCompleted = (id) => {
    console.log('TODO cambiar Estado de una tarea')
  }

  return (
    <div>
      <div>
        <h1>Tareas</h1>
      </div>
      {/* TODO: Aplicar un For/Map para renderizar una lista de tareas */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};


export default TaskListComponent;
