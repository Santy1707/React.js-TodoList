import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

/**
 *
 * Este componente recibe como prop una tarea de la clase tasks
 */

const TaskComponent = ({ task }) => {
  const changeState = (id) => {
    console.log('TODO: Cambar el estado de una tarea')
  }


  return (
    <div>
      <h2> Nombre: { task.name } </h2>
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
