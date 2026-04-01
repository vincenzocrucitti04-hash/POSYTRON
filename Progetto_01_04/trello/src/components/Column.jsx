import Card from "./Card";

function Column({ title, tasks, id, onAdd, onDelete }) {
  return (
    <div style={{
        background: "#f4f4f4",
        padding: "30px",
        width: "250px",
        borderRadius: "10px"
    }}>
      <h2>{title}</h2>

      {tasks.map(task => (
        <Card 
          key={task.id} 
          task={task} 
          onDelete={() => onDelete(id, task.id)} 
        />
      ))}

      <button className="buttonAdd"
      onClick={() => onAdd(id)} 
      style={{
        width: "100%", 
        marginTop: "20px", 
        cursor: "pointer"
        }}>
        Aggiungi Task ( + )
      </button>
    </div>
  );
}

export default Column;
