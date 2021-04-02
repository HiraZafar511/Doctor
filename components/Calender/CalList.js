import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const finalSpaceCharacters = [
  {
    id: '1',
    name: ' My Event One',
   thumb: 'text-info'
    
  },
  {
    id: '2',
    name: ' My Event Two',
 thumb: 'text-success'
  },
  {
    id: '3',
    name: ' My Event Three',
   thumb: 'text-danger'
    
  },
  {
    id: '4',
    name: ' My Event Four',
  thumb: 'text-warning'
  },
 
]

function App() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="calList">
      <div className="card">
       
      <div className="card-header"> <h4 class="card-title mb-0">Drag &amp; Drop Event</h4></div>
       <div className="card-body">
       <div className="calendar-events">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                         
                          <p>
                          <i class={` ${ thumb } fas fa-circle `}></i>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        </div>
      
     
    </div></div></div>
  );
}

export default App;