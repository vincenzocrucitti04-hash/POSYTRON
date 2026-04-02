import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [tasks, setTasks] = useState([
      { id: 1, text: "Andare a fare la spesa", description: "Latte,Mandorle,Cereali,Pollo", status: "todo" },
      { id: 3, text: "Sviluppare Progetto Trello", description: "Migliorare l'efficienza dei task, con l'aggiunta di alcune funzionalità diverse", status: "progress" },
      { id: 5, text: "Fissare appuntamento Dottore", description: "Devo prenotare le analisi del sangue", status: "done" }
  ]);

  // Array degli stati
  const columns = ["todo", "progress", "done"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const[editingTaskId, setEditingTaskId] = useState(null)
  const [newTaskData, setNewTaskData] = useState({ text: "", description: "", status: "todo" });

const openModal = () => {
  setNewTaskData({ text: "", description: "", status: "todo" });
  setEditingTaskId(null);
  setIsModalOpen(true);
};

const openEditModal = (task) => {
  setNewTaskData({ text: task.text, description: task.description, status: task.status });
  setEditingTaskId(task.id);
  setIsModalOpen(true);
};

const handleSaveTask = () => {
  const { text, description, status } = newTaskData;

  // Validazione Titolo Vuoto
  if (!text.trim()) {
    return alert("Il titolo è obbligatorio");
  }

  // Validazione Lunghezza Titolo
  if (text.length > 80 && typeof text === "string") {
    alert("Errore: il titolo supera il limite di caratteri consentito (80)");
    return;
  }

  // Validazione Lunghezza Descrizione
  if (description.length > 250 && typeof description === "string") {
    alert("Errore: la descrizione supera il limite di caratteri consentito (250)");
    return;
  }

  // Validazione Status
  if (!columns.includes(status)) {
    alert("Errore: Status non valido!");
    return;
  }

  const now = new Date();
  const currentDateTime = now.toLocaleDateString('it-IT', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });

  if (editingTaskId) {
    // --- MODALITÀ MODIFICA ---
    setTasks(tasks.map(t => t.id === editingTaskId ? { ...t, ...newTaskData, updatedAt: currentDateTime} : t ));
  } else { const createdAt = currentDateTime; const newTask = { ...newTaskData, id: Date.now(), createdAt: createdAt }; 
  setTasks([...tasks, newTask]);
  }

  setIsModalOpen(false);
  setEditingTaskId(null);
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
      onEdit={openEditModal}
      />

{isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{editingTaskId ? "Modifica Task" : "Nuovo Task"}</h2>
            
            <label>Titolo ({newTaskData.text.length}/80)</label>
            <input 
              type="text" 
              value={newTaskData.text}
              onChange={(e) => {
                if (e.target.value.length <= 80) 
                  setNewTaskData({...newTaskData, text: e.target.value})
              }}
            />

            <label>Descrizione ({newTaskData.description.length}/250)</label>
            <textarea 
              value={newTaskData.description}
              onChange={(e) => {
                if (e.target.value.length <= 250) 
                  setNewTaskData({...newTaskData, description: e.target.value})
              }}
            />

            <label>Stato</label>
            <select 
              value={newTaskData.status}
              onChange={(e) => setNewTaskData({...newTaskData, status: e.target.value})}
            >
              {columns.map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            <div className="modal-actions" style={{display:"flex", justifyContent:"space-between",alignItems:"center", marginTop:"20px", width:"100%"}}>
              <button onClick={() => setIsModalOpen(false)} className="cancel-btn">Annulla</button>
              <button onClick={handleSaveTask} className="save-btn">Salva</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
