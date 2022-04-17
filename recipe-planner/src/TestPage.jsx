import DragAndDrop from './DragAndDrop';
import RatingSystem from './RatingSystem';
import React, { useState } from 'react';
import './TestPage.css';

export default function TestPage() {
  const divStyle = {
    height: '200px',
    width: '200px',
    backgroundColor: 'white',
    border: '1px solid black',
  };

  const [numberArray, setNumberArray] = useState([0, 1, 2]);

  function handleDragStart(event, startIndex) {
    event.dataTransfer.setData('startIndex', startIndex);
  }

  function handleDrop(event, dropIndex) {
    const startIndex = event.dataTransfer.getData('startIndex');
    console.log('picked up', startIndex);
    console.log('dropping', dropIndex);

    const newArray = swapElements(startIndex, dropIndex);

    setNumberArray(newArray);
  }

  function swapElements(startIndex, dropIndex) {
    const newArray = [...numberArray];
    const placeHolder = newArray[startIndex];
    newArray[startIndex] = newArray[dropIndex];
    newArray[dropIndex] = placeHolder;

    return newArray;
  }

  return (
    <div className="container">
      <h1>Test Page</h1>
      {numberArray.map((el, index) => {
        const uniqueId = `weekly-meal-${index}`;

        return (
          <DragAndDrop
            key={el}
            uniqueId={uniqueId}
            dragStart={(e) => handleDragStart(e, index)}
            drop={(e) => handleDrop(e, index)}
          >
            <div style={divStyle}>
              <p>{el}</p>
            </div>
          </DragAndDrop>
        );
      })}
    </div>
  );
}
