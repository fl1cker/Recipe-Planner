function DragAndDrop({ children, dragStart, drop }) {
  function allowDrop(ev) {
    ev.preventDefault();
  }

  return (
    <div
      className="drag-and-drop-container"
      draggable="true"
      onDrop={(e) => drop(e)}
      onDragOver={(e) => allowDrop(e)}
      onDragStart={(e) => dragStart(e)}
    >
      {children}
    </div>
  );
}

export default DragAndDrop;
