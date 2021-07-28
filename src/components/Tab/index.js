import "./index.css";
import SingleTab from "../SingleTab";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchProduct,
} from "../../redux/actions/productsActions";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const finalSpaceCharacters = [
    {
      id: 'gary',
      title: 'Gary Goodspeed',
      thumb: '/images/gary.png'
    },
    {
      id: 'cato',
      title: 'Little Cato',
      thumb: '/images/cato.png'
    },
    {
      id: 'kvn',
      title: 'KVN',
      thumb: '/images/kvn.png'
    },
    {
      id: 'mooncake',
      title: 'Mooncake',
      thumb: '/images/mooncake.png'
    },
    {
      id: 'quinn',
      title: 'Quinn Ergon',
      thumb: '/images/quinn.png'
    }
  ]

const Tab = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const product = useSelector((state) => state.product);
  console.log(product, "------");
  // console.log(products);
  const add = () => {
    const last = products[products.length - 1];
    if (products.length >= 10 || last.id >= 10) {
      return;
    }

    dispatch(fetchProduct(last.id + 1));
  };
  
    const [characters, updateCharacters] = useState(finalSpaceCharacters);
    console.log('ccccc',characters);
    function handleOnDragEnd(result) {
      if (!result.destination) return;
  
      const items = Array.from(characters);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
  
      updateCharacters(items);
    }
  
  useEffect(() => {
    dispatch(fetchProducts());
    
  }, []);
  return (
    <div >
    <div className="tabs-container">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
              {characters.map((product, index) => {
                return (
                  <Draggable key={product.id} draggableId={product.id} index={index}>
                    {(provided) => (
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <SingleTab product={product} />
                      
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
    
  </div>

  );
};

export default Tab;
