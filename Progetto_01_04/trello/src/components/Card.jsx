function Card({ task, onMove, onDelete, allStatuses }) {
  return (
    <div className="card"
     style={{ 
      background: "white",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px" 
      }}>

      <div style={{
         display: "flex",
         flexDirection:"column"
        }}>

        <span style={{fontWeight: "bold", marginBottom: "15px"}}>{task.text}</span>

        <span style={{marginBottom: "15px"}}>{task.description}</span>

        <button onClick={onDelete} style={{ background: "red", color: "white" }}>X</button>
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