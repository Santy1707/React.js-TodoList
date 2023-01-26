import React, {useState, useEffect} from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import '../../styles/task.scss'
import TaskForm from "../pure/forms/taskForm";

/**
 * Importamo la hoja de estilos task.css
 */

const TaskListComponent = () => {

  
  const defaultTask1 = new Task('Example', 'Description 1', true, LEVELS.NORMAL);
  const defaultTask2 = new Task('Example', 'Description 2', false, LEVELS.URGENT);
  const defaultTask3 = new Task('Example', 'Description 2', false, LEVELS.BLOCKING);

  // Estado del componente 
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
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
      <div className="col-12">
      <div className="card">
        {/*Card header */}
          <div className="card-header p-3">
          <h5>
              Your Tasks:
          </h5>
          </div>
          {/*Card content */}

          <div className="card-body" data-mdb-perfect-scrollbar='true' style={ { position: 'relative', height: '400px'  } }>
            <table>
              <thead>
                <tr>
                    <th scope="col"> Title </th>
                    <th scope="col"> Description </th>
                    <th scope="col"> Level/priority </th>
                    <th scope="col"> Actions </th>
                </tr>
              </thead>
              <tbody>
                  {
                    tasks.map((task, index) => {
                      return(
                          <TaskComponent 
                            key={index} 
                            task={task}>
                          </TaskComponent>
                      )
                    })
                  }
              </tbody>
            </table>
          </div>
          <TaskForm></TaskForm>
      </div>
      </div>
      {/* TODO: Aplicar un For/Map para renderizar una lista de tareas */}
      {/* <TaskComponent task={defaultTask}></TaskComponent> */}
    </div>
  );
};


export default TaskListComponent;
