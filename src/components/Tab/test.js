
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div className="characters tabs" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map((product, index) => {
                  return (
                    <Draggable key={product.id} draggableId={product.id} index={index}>
                      {(provided) => (
                        <SingleTab key={index} product={product} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                         
                        
                        </SingleTab>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
  
