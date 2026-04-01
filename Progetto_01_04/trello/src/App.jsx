import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [board, setBoard] = useState({
    todo: [
      { id: 1, text: "Andare a fare la spesa" },
      { id: 2, text: "Comprare mobile cucina" }
    ],
    progress: [
      { id: 3, text: "Sviluppare Progetto Trello" },
      { id: 4, text: "Creare un design per la pagina" }
    ],
    done: [
      { id: 5, text: "Fissare apuntamento con Dottore" },
      { id: 6, text: "Fare abbonamento parcheggio"}
    ]
  });

  // Funzione per aggiungere un task
  const addTask = (columnId) => {
    const text = prompt("Cosa devi fare?");
    if (!text) return;

    const newTask = { id: Date.now(), text: text };
    
    setBoard({
      ...board,
      [columnId]: [...board[columnId], newTask]
    });
  };

  // Funzione per eliminare un task
  const deleteTask = (columnId, taskId) => {
    setBoard({
      ...board,
      [columnId]: board[columnId].filter(task => task.id !== taskId)
    });
  };

  return (
    <div style={{
      display: "flex",           
      flexDirection: "column",    
      alignItems: "center",      
      justifyContent: "center",
      width: "100%"}}
    className="app-container">
      <h1>My Trello Board</h1>
      <Board board={board} onAdd={addTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
