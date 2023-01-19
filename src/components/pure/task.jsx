import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import '../../styles/task.scss'
/**
 * Importamos la hoja de estilos task.scss
 */

/**
 *
 * Este componente recibe como prop una tarea de la clase tasks
 */

const TaskComponent = ({ task }) => {

  useEffect(() => {
    console.log('Tarea creada')
    return () => {
      console.log(`Task: ${task} is going to unmount`)
    };
  }, [task]);

  return (
    <div>
      <h2 className="task-name"> Nombre: { task.name } </h2>
      <h3> Description: { task.description } </h3>
      <h4> Level: { task.description } </h4>
      <h5> 
        This task is: {task.completed ? 'COMPLETED' : 'PENDING'} 
      </h5>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
