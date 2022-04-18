function DragAndDrop({ children, index, swapMethod }) {
  function allowDrop(ev) {
    ev.preventDefault();
  }

  function dragStart(event) {
    event.dataTransfer.setData('startIndex', index);
  }

  function drop(event) {
    const startIndex = event.dataTransfer.getData('startIndex');

    swapMethod(startIndex, index);
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
