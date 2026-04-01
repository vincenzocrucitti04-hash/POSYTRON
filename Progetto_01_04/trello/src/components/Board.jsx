import Column from "./Column";

function Board({ board, onAdd, onDelete }) {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>

      <Column 
      title="Todo" 
      id="todo" 
      tasks={board.todo} 
      onAdd={onAdd} 
      onDelete={onDelete} />

      <Column 
      title="Progress" 
      id="progress" 
      tasks={board.progress} 
      onAdd={onAdd} 
      onDelete={onDelete} />

      <Column 
      title="Done" 
      id="done" 
      tasks={board.done} 
      onAdd={onAdd} 
      onDelete={onDelete} />
      
    </div>
  );
}

export default Board;