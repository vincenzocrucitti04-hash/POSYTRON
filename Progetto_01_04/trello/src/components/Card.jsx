function Card({ task, onMove, onDelete, onEdit, allStatuses }) {
  return (
    <div className="card" style={{ background: "white", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}>
      <div style={{ display: "flex", flexDirection:"column"}}>

        <span style={{fontWeight: "bold", marginBottom: "15px"}}>{task.text}</span>

        <span style={{marginBottom: "15px"}}>{task.description}</span>

        <button onClick={onDelete} className="delete-btn" style={{ background: "red", color: "white", cursor: "pointer", borderRadius: "3px", border: "none", marginBottom: "5px"}}>X</button>

        <button onClick={() => onEdit(task)} className="edit-btn">✎</button>
      </div>

      <div style={{ fontSize: "10px", color: "#999", marginTop: "10px" }}>

        <div>Creato il: {task.createdAt || "N/D"}</div>
        
        {task.updatedAt && (
          <div style={{ color: "#007bff", fontWeight: "500", marginTop: "2px" }}>
            Ultima modifica: {task.updatedAt}
          </div>
        )}
      </div>

      <select 
        value={task.status} 
        onChange={(e) => onMove(task.id, e.target.value)}
        style={{ marginTop: "10px", width: "100%" }}
      >
        {allStatuses.map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );
}

export default Card;
