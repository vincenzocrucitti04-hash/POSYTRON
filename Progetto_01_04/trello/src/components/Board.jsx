import Column from "./Column";

function Board({ tasks, columns, onAdd, onDelete, onMove }) {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      {columns.map(colStatus => (
        <Column 
          key={colStatus}
          title={colStatus.toUpperCase()}
          status={colStatus}
          // Filtriamo i task: passiamo alla colonna solo quelli che le competono
          tasks={tasks.filter(t => t.status === colStatus)} 
          onAdd={onAdd} 
          onDelete={onDelete} 
          onMove={onMove}
          allStatuses={columns}
        />
      ))}
    </div>
  );
}

export default Board;
