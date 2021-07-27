import './index.css'
import {useDispatch} from 'react-redux'
import { selectedProduct,deleteTab} from '../../redux/actions/productsActions';

const SingleTab = ({product}) => {
    const dispatch = useDispatch();
    
    return (
        <div className='tab' >
            <span onClick={()=>dispatch(selectedProduct(product))}>Tab {product.id}</span>
            <button className='btn' onClick={()=>dispatch(deleteTab(product))}>❌</button>
        </div>
    )
}

export default SingleTab
