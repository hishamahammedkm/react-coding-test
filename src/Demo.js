import { useState } from "react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

const Demo = () => {
    const [products, setProducts] = useState([
        {id:1,title:'hisham'},{id:2,title:'sanu'},
        {id:3,title:'minnu'},
    ])
    const allProducts = products.map((product,i)=>(
        <Draggable
         draggableId={`draggable-${i}`}
         key={`draggable-${i}`}
         index={i}
        >
        { (provided)=>( <div  
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            key={i} style={{margin:'10px',cursor:'pointer'}}>
            <h2>{product.title}</h2>
         </div>
         )}
        </Draggable>
    ))
    const dragEnd = (result)=>{
        console.log(result);
        const productItems = [...products]
        const [orderedProducts] = productItems.splice(result.source.index,1)
        productItems.splice(result.destination.index,0,orderedProducts)
        setProducts(productItems)
    }
    return (
        <div className="container" style={{backgroundColor:'green'}} >
            <DragDropContext onDragEnd={dragEnd}>
                <Droppable
                 droppableId="productsSequence"
                 direction="horizontal"
                 type="column"   
                      
                
                >
                { (provided)=>( <div 
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className='row' style={{display:'flex'}}
                  >
                  {allProducts}
                  {provided.placeholder}

                 </div>
                 )}
                </Droppable>
             
            </DragDropContext>
        </div>
    )
}

export default Demo
