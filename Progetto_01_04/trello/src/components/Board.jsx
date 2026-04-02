import Column from "./Column";

function Board({ tasks, columns, description, onDelete, onMove }) {
  return (
    <div style={{ 
      display: "flex",
      gap: "20px",
      justifyContent: "center" 
      }}>
        
      {columns.map(colStatus => (
        <Column 
          key={colStatus}
          title={colStatus.toUpperCase()}
          status={colStatus}
          description={description}
          // Filtriamo i task: in modo tale che passiamo alla colonna solo quelli che gli interessano
          tasks={tasks.filter(t => t.status === colStatus)}
          onDelete={onDelete} 
          onMove={onMove}
          allStatuses={columns}
        />
      ))}
    </div>
  );
}

export default Board;
