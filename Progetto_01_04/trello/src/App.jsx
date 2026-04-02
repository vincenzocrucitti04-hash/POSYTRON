import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [tasks, setTasks] = useState([
      { id: 1, text: "Andare a fare la spesa", description: "Latte,Mandorle,Cereali,Pollo", status: "todo" },
      { id: 2, text: "Comprare mobile cucina", description: "Deve essere bianco, misure 30x50x20", status: "todo" },
      { id: 3, text: "Sviluppare Progetto Trello", description: "Migliorare l'efficienza dei task, con l'aggiunta di alcune funzionalità diverse", status: "progress" },
      { id: 4, text: "Creare un design per la pagina", description: "Migliorare il css, per avere un impatto visivo migliore", status: "progress" },
      { id: 5, text: "Fissare appuntamento Dottore", description: "Devo prenotare le analisi del sangue", status: "done" },
      { id: 6, text: "Fare abbonamento parcheggio", description: "Trovare abbonamento per Zona B e A", status: "done" },
  ]);

  const columns = ["todo", "progress", "done"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTaskData, setNewTaskData] = useState({
  text: "",
  description: "",
  status: "todo"
});

const openModal = (status = "todo") => {
  setNewTaskData({ text: "", description: "", status: status });
  setIsModalOpen(true);
};

const handleSaveTask = () => {
  if (newTaskData.text.trim() === "") return alert("Il titolo è obbligatorio");

  const newTask = {
    ...newTaskData,
    id: Date.now(),
  };

  setTasks([...tasks, newTask]);
  setIsModalOpen(false);
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

      <button onClick={() => openModal("todo")} 
      style={{
        position: "fixed",
        zIndex: 100,
        top: "20px",
        right: "20px",
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold"
      }}>
         + Nuovo Task
        </button>

      <h1>My Trello Board</h1>
      <Board 
      tasks={tasks}
      columns={columns}
      onDelete={deleteTask}
      onMove={moveTask} 
      />

      {isModalOpen && (
  <div className="modal-overlay">
    <div className="modal-content">
      <h2>Aggiungi Nuovo Task</h2>
      
      <label>Titolo (Max 80)</label>
      <input 
        type="text" 
        value={newTaskData.text}
        onChange={(e) => setNewTaskData({...newTaskData, text: e.target.value})}
        placeholder="Cosa devi fare?"
      />
      <small>{newTaskData.text.length}/80</small>

      <label>Descrizione (Max 250)</label>
      <textarea 
        value={newTaskData.description}
        maxLength={250}
        onChange={(e) => setNewTaskData({...newTaskData, description: e.target.value})}
        placeholder="Aggiungi dettagli..."
      />
      <small>{newTaskData.description.length}/250</small>

      <label>Stato</label>
      <select 
        value={newTaskData.status}
        onChange={(e) => setNewTaskData({...newTaskData, status: e.target.value})}
      >
        {columns.map(col => <option key={col} value={col}>{col}</option>)}
      </select>

      <div className="modal-buttons" style={{display:"flex", justifyContent:"space-between",alignItems:"center", marginTop:"20px", width:"100%"}}>
        <button onClick={() => setIsModalOpen(false)} className="cancel-btn">Annulla</button>
        <button onClick={handleSaveTask} className="save-btn">Salva Task</button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default App;
