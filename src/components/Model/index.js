import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteTab,} from '../../redux/actions/productsActions'
import './index.css'

const Modal = ({show,setShowModal,product}) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);

    const removeTab = ()=>{
        if (products.length === 1) return
        dispatch(deleteTab(product))
    }
    return (
        <div className='container'>
            <h4>Are you Sure want to delete Tab {product.id} ?</h4>
            
                <button onClick={()=>setShowModal(false)}>Cancel</button>
                <button onClick={removeTab}>Delete</button>
           
        </div>
    )
}

export default Modal
