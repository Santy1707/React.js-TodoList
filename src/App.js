import logo from './logo.svg';
import './App.css';
// import Greating from './components/pure/greating'; 
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
// import ContactList from './components/container/contact_list';
// import Ejemplo1 from './hooks/ejemplo1';
// import Ejemplo2 from './hooks/ejemplo2';
// import MiComponenteConContexto from './hooks/ejemplo3';
// import Ejemplo4 from './hooks/ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import LifeCycleTarea from './hooks/lifecycle/lifeCycleTarea';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
          {/** Componente propio -- Greeting.jsx */}
          {/* <Greating name="Santiago"></Greating> */}
          {/* <GreetingF name="Santiago"></GreetingF> */}
          <TaskListComponent></TaskListComponent>
          {/* <ContactList></ContactList> */}
          {/* <Ejemplo1></Ejemplo1> */}
          {/* <Ejemplo2></Ejemplo2> */}
          {/* <MiComponenteConContexto></MiComponenteConContexto> */}
          {/* <Ejemplo4 nombre='Santiago'> */}
          {/* Todo lo que esta aqui adentro es tratado como props.children */}
            {/* <h3>
              Contenido del props.children
            </h3> */}
          {/* </Ejemplo4> */}
          {/* <GreetingStyled name={'Santiago'}></GreetingStyled> */}
          {/* <LifeCycleTarea></LifeCycleTarea> */}
      {/* </header> */}
    </div>
  );
}

export default App;
