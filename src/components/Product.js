import {useState} from 'react';
import './Product.css'
const Product = ({product,handleReset}) => {
    const [edit, setEdit] = useState(false);
    
    const handleToSave = (e)=>{
        e.preventDefault()
        // Verifica si la función fue ejecutada presionando Enter o a traves del botón
        const newValue = e.target.id === "ProductForm" ?
        e.target.firstElementChild.value
        :
        e.target.parentNode.previousElementSibling.firstElementChild
        let localStorageData = JSON.parse(localStorage.getItem("Lista"))
        // Despues de parsear la lista, busca el indice del array para editar su valor
        let productIndexOf = localStorageData.indexOf(product)
        localStorageData[productIndexOf] = newValue
        localStorage.setItem("Lista",JSON.stringify(localStorageData))
        handleReset()
        setEdit(false)
    }  
    const handleToDelete = () =>{
        let localStorageData = JSON.parse(localStorage.getItem("Lista"))
        // Despues de parsear la lista, busca el indice del array para eliminar su valor
        let productIndexOf = localStorageData.indexOf(product)
        localStorageData.splice(productIndexOf,1)
        localStorage.setItem("Lista",JSON.stringify(localStorageData))
        handleReset()
        setEdit(false)
    }

  return <div className='Product'>
    {
        edit === false ?
        <>
            <p className='Product__p'>{product}</p>
            <div>
            <button className='Product__btn' onClick={()=>{setEdit(true)}}>Editar</button>
            <button className='Product__btn' onClick={handleToDelete}>Eliminar</button>
            </div>
        </>
        :
        <>
        <form onSubmit={handleToSave} id='ProductForm'>
            <input className='Product__input' type="text" defaultValue={product}/>
        </form>
        <div>
        <button className='Product__btn' onClick={handleToSave} id='ProductBtnSave'>Guardar</button>
        <button className='Product__btn' onClick={()=>{setEdit(false)}}>Cancelar</button>
        </div>
        </>
    }

  </div>;
};

export default Product;
