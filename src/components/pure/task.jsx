import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import '../../styles/task.scss'
import { LEVELS } from "../../models/levels.enum";
/**
 * Importamos la hoja de estilos task.scss
 * Este componente recibe como prop una tarea de la clase tasks
 */

const TaskComponent = ({ task }) => {

  useEffect(() => {
    console.log('Tarea creada')
    return () => {
      console.log(`Task: ${task} is going to unmount`)
    };
  }, [task]);
  /**
   * Function that returns a Badge
   * depending on the level of the task
   */

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return(
        <h6 className="mb-0">
          <span className="badge bg-primary">
            {task.level}
          </span>
        </h6>
        )

      case LEVELS.URGENT:
        return(
        <h6 className="mb-0">
          <span className="badge bg-warning">
            {task.level}
          </span>
        </h6>
        )
        
      case LEVELS.BLOCKING: 
      return(
        <h6 className="mb-0">
          <span className="badge bg-danger">
            {task.level}
          </span>
        </h6>
      )
      default:
        break;
    }
  }

  /**
   * Funtion that
   * @returns Icon depending on completion of the Task
   */

  function taskIconCompleted() {
    if (task.completed){ 
      return (<i className="bi-toggle-on" style={{color: 'green', fontSize: '20px'}}></i>) 
    } else {
      return (<i className="bi-toggle-off" style={{color: 'grey', fontSize: '20px'}}></i>)
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
        {/*Execution of function to return badge element*/}
        {taskLevelBadge()}
      </td>
      <td className="align-middle">
      {/* Execution of function to return Icon element depending on completion */}
      {taskIconCompleted()}
        <i className="bi-trash" style={{color: 'tomato', fontSize: '20px'}}></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
