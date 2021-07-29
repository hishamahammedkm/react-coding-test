import './index.css'
import {useDispatch} from 'react-redux'
import { selectedProduct,deleteTab} from '../../redux/actions/productsActions';
import { useState } from 'react';
import Modal from '../Model';

const SingleTab = ({product,activeTab,setActiveTab}) => {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch();
    
    const changeColor =(id)=>{
       setActiveTab(id)
        
    }
    
    return (
        <div onClick={()=>changeColor(product.id)} className={activeTab === product.id ? 'activeTab':'tab'} >
            {
                showModal && (<Modal show={showModal} setShowModal={setShowModal} product={product}  />)}
            <span onClick={()=>dispatch(selectedProduct(product))}>Tab {product.id}</span>
            <button className='btn' onClick={()=>setShowModal(true)}>❌</button>

        </div>
    )
}

export default SingleTab
