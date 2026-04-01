function Card({ task, onDelete }) {
  return (
    <div style={{
      background: "white",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <span>{task.text}</span>
      <button 
        onClick={onDelete} 
        style={{ 
            background: "red", 
            color: "white", 
            border: "none", 
            cursor: "pointer", 
            padding: "2px 6px", 
            borderRadius: "3px" }}
      >
        X
      </button>
    </div>
  );
}

export default Card;