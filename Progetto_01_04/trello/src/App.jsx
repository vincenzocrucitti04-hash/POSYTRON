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
      { id: 5, text: "Fissare appuntamento Dottore" },
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

const moveTask = (taskId, fromColumn, toColumn) => {
  if (fromColumn === toColumn) return;

  const taskToMove = board[fromColumn].find(t => t.id === taskId);

  setBoard({
    ...board,
    [fromColumn]: board[fromColumn].filter(t => t.id !== taskId),
    [toColumn]: [...board[toColumn], taskToMove]
  });
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

      <div style={{
        padding:"20px",
        background:"white",
        marginBottom:"2rem",
        borderRadius:"3rem"
      }}>
        <h1>My Trello Board</h1>
        </div>
      <Board board={board} onAdd={addTask} onDelete={deleteTask} onMove={moveTask} />
    </div>
  );
}

export default App;
