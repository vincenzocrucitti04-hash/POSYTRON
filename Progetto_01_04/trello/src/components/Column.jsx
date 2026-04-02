import Card from "./Card";

function Column({ title, tasks, description, onDelete, onMove, onEdit, allStatuses }) {
  return (
    <div className="column" style={{ background: "#f4f4f4", padding: "20px", width: "250px", borderRadius: "10px" }}>

      <h2 style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily:"Playwrite IE" }}>

        {title}

        <span style={{ fontSize: "14px", background: "#ddd", padding: "2px 8px", borderRadius: "10px",color: "#666" }}>

          {tasks.length}

        </span>
      </h2>

      {tasks.map(task => (
        <Card 
          key={task.id} 
          task={task}
          description={description} 
          onDelete={() => onDelete(task.id)} 
          onMove={onMove}
          onEdit={onEdit}
          allStatuses={allStatuses}
        />
      ))}
    </div>
  );
}

export default Column;
