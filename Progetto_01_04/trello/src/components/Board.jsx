import Column from "./Column";

function Board({ board, onAdd, onDelete, onMove }) {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>

      <Column 
      title="Todo" 
      id="todo" 
      tasks={board.todo} 
      onAdd={onAdd} 
      onDelete={onDelete}
      onMove={onMove} />

      <Column 
      title="Progress" 
      id="progress" 
      tasks={board.progress} 
      onAdd={onAdd} 
      onDelete={onDelete}
      onMove={onMove} />

      <Column 
      title="Done" 
      id="done" 
      tasks={board.done} 
      onAdd={onAdd} 
      onDelete={onDelete}
      onMove={onMove} />
      
    </div>
  );
}

export default Board;
