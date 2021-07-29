import './index.css'
import {useDispatch} from 'react-redux'
import { selectedProduct,deleteTab} from '../../redux/actions/productsActions';
import { useState } from 'react';
import Modal from '../Model';

const SingleTab = ({product}) => {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch();
    const [state, setstate] = useState(false)
    
    return (
        <div className='tab' >
            {
                showModal && (<Modal show={showModal} setShowModal={setShowModal} product={product}  />)}
            <span onClick={()=>dispatch(selectedProduct(product))}>Tab {product.id}</span>
            <button className='btn' onClick={()=>setShowModal(true)}>❌</button>

        </div>
    )
}

export default SingleTab
