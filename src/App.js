
import './App.css';
import MyfirstComponent from './MyfirstComponent';

function App() {
  const tasks=[
    "task1",
    "task2",
    "task3",
    "task4",
    "task5"
  ]
  const myTasksList = tasks.map(task =>{
    return <li key={task}>{task}</li>
  })
  const showCategories = true;
  const Today = new Date().toLocaleDateString();
  return (
    <div className="App">
    <MyfirstComponent name={Today}/>
    <div>
      <ul>
        {myTasksList}
      </ul>
    </div>
    </div>
  
  );
}

export default App;
