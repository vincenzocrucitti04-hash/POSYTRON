function Card({ task, columnId, onDelete, onMove }) {
  return (
    <div style={{
      background: "white",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <span>{task.text}</span>
      <button 
        onClick={onDelete} 
        style={{ 
            background: "red", 
            color: "white", 
            border: "none", 
            cursor: "pointer", 
            padding: "2px 6px", 
            borderRadius: "3px" 
          }}
      >
        X
      </button>
      </div>
      
      <select 
        value={columnId} 
        onChange={(e) => onMove(task.id, columnId, e.target.value)}
        style={{ fontSize: "12px", padding: "2px", cursor: "pointer" }}
      >
        <option value="todo">Da fare</option>
        <option value="progress">In corso</option>
        <option value="done">Fatto</option>
      </select>

    </div>
  );
}

export default Card;
