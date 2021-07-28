import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SingleTab from '../SingleTab';
import './index.css'
import { fetchProducts,fetchProduct } from "../../redux/actions/productsActions";
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';

const finalSpaceCharacters = [
  {
    id: '1',
    title: 'Hisham',
    thumb: '/images/gary.png'
  },
  {
    id: '2',
    title: 'Anu',
    thumb: '/images/cato.png'
  },
  {
    id: '3',
    title: 'Affnu',
    thumb: '/images/cato.png'
  },

]

const Tab = ()=> {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const product = useSelector((state) => state.product);
   console.log(product,'------');
  // console.log(products);
 
  const add = ()=>{
      const last = products[products.length-1]
      if (products.length >=10 || last.id >=10 ){
          return
      }
      
      
      dispatch(fetchProduct(last.id+1))

  }
 
    const [characters, updateCharacters] = useState(finalSpaceCharacters);
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
                         <SingleTab key={product.id} product={product} />
                        
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
        <button onClick={add}>Add</button>
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
