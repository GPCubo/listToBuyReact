import './AddProducts.css'
const AddProducts = ({setProduct,handleSubmit}) => {
  return <form className='AddProduct' onSubmit={handleSubmit} id='AddProduct'>
      <label htmlFor='addProduct__input' className='AddProducts__label'>Añadir Producto</label>
      <input className='AddProducts__input' autoComplete="off" onChange={(e)=>{setProduct(e.target.value)}} type="text" id='addProduct__input'/>
  </form>;
};

export default AddProducts;
