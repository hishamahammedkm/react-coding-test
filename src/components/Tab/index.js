import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SingleTab from '../SingleTab';
import './index.css'
import { fetchProducts,fetchProduct, setLoading } from "../../redux/actions/productsActions";
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';



const Tab = ()=> {
  const [activeTab, setActiveTab] = useState()
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const product = useSelector((state) => state.product);
  const isLoading = useSelector((state) => state.allProducts.isLoading);
  // console.log(products);
 
  const add = ()=>{
    dispatch(setLoading(true))
    if(isLoading) return

      console.log('isloading==',isLoading);
      const last = products[products.length-1] || 0
      if (products.length >=10 || last.id >=10 ){
          return
      }
      
      
       dispatch(fetchProduct(last.id+1))

  }
 
    const [characters, updateCharacters] = useState(products);
    useEffect(() => {
      updateCharacters(products)
   
    }, [products])

  
  const handleOnDragEnd =(result)=> {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  useEffect(() => {
    dispatch(fetchProducts())
 
}, [])

  return (
    <div className='main'>

    
    <div className="Tabs">
      
    
    <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters" direction="horizontal">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map((product, index) => {
                  return (
                    <Draggable key={product.id} draggableId={product.title} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                         <SingleTab key={product.id} product={product} activeTab={activeTab} setActiveTab={setActiveTab} />
                        
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
        {products?.length >0 &&<button className='addTab' onClick={add}>???</button>
}
        
     
    </div>
    <div className='chevrons'>
      {activeTab !== products[0]?.id &&  <div>
       <h1>???</h1>
      </div>}
      {activeTab != products[products?.length-1]?.id && <div>
      <h1>???</h1>
      </div>}

    </div>
    <div className="tab-content">
    {
        product.id && (
         <div>
             <h3>Tab{product?.id} content</h3>
             <p>{product?.title}</p>
         </div>
          
        )
    }         
     
 </div>
 </div>
  );
}

export default Tab;
