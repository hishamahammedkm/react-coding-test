import './index.css'
import SingleTab from "../SingleTab"
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchProducts,fetchProduct } from "../../redux/actions/productsActions";
const Tab = () => {
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
    useEffect(() => {
        dispatch(fetchProducts())
     
    }, [])
    return (
        <div>
            <div className="tabs-container">
                <div className="tabs">
                    {
                        products?.map((product,index)=>(<SingleTab key={index} product={product} />))
                    }
                    
                
                </div>
                <button onClick={add}>Add</button>
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
    )
}

export default Tab
