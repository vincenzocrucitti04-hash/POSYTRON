import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [tasks, setTasks] = useState([
      { id: 1, text: "Andare a fare la spesa", status: "todo" },
      { id: 2, text: "Comprare mobile cucina", status: "todo" },
      { id: 3, text: "Sviluppare Progetto Trello", status: "progress" },
      { id: 4, text: "Creare un design per la pagina", status: "progress" },
      { id: 5, text: "Fissare appuntamento Dottore", status: "done" },
      { id: 6, text: "Fare abbonamento parcheggio", status: "done" },
  ]);

  const columns = ["todo", "progress", "done"];

  // Funzione per aggiungere un task
  const addTask = (status) => {
    const text = prompt("Cosa devi fare?");
    if (!text) return;

    const newTask = { id: Date.now(), text: text, status: status };
    
    setTasks([...tasks, newTask]);
  };

  // Funzione per eliminare un task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Funzione per spostare un task
const moveTask = (taskId, newStatus) => {
  setTasks(tasks.map(task => task.id === taskId ? {...task, status: newStatus} : task));
};


  return (
    <div style={{
      display: "flex",           
      flexDirection: "column",    
      alignItems: "center",      
      justifyContent: "center",
      width: "100%"
    }}
    className="app-container">
      <h1>My Trello Board</h1>
      <Board 
      tasks={tasks}
      columns={columns}
      onAdd={addTask}
      onDelete={deleteTask}
      onMove={moveTask} 
      />
    </div>
  );
}

export default App;
