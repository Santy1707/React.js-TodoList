import logo from './logo.svg';
import './App.css';
// import Greating from './components/pure/greating'; 
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list';
import ContactList from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/** Componente propio -- Greeting.jsx */}
          {/* <Greating name="Santiago"></Greating> */}
          {/* <GreetingF name="Santiago"></GreetingF> */}
          {/* <TaskListComponent></TaskListComponent> */}
          <ContactList></ContactList>
          
      </header>
    </div>
  );
}

export default App;
