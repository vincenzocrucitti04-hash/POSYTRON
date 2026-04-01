import Card from "./Card";

function Column({ title, tasks, status, onAdd, onDelete, onMove, allStatuses }) {
  return (
    <div className="column" 
    style={{ 
      background: "#f4f4f4",
      padding: "10px",
      width: "250px",
      borderRadius: "10px" 
      }}>

      <h2>{title} ({tasks.length})</h2>

      {tasks.map(task => (
        <Card 
          key={task.id} 
          task={task} 
          onDelete={() => onDelete(task.id)} 
          onMove={onMove}
          allStatuses={allStatuses}
        />
      ))}

      <button onClick={() => onAdd(status)}>+ Aggiungi</button>
    </div>
  );
}