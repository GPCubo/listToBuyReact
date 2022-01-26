import './App.css';
import AddProducts from './components/AddProducts';
import { Header } from './components/Header';
import {useState,useEffect} from 'react';
import MapProducts from './components/MapProducts';

function App() {
  const [product, setProduct] = useState("");
  const [data, setData] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(product === "")return alert("Rellene el campo para guardar")
    // Parseamos la data que se encuentre en el localstorage, en caso de no haber nos regresara null
    const dataLocalStorage = JSON.parse(localStorage.getItem('Lista'))
    let createArray = []
    // En caso de haber data, la metemos dentro de este array con el nuevo producto a añadir. En caso contrario solo añadimos el producto
    if(dataLocalStorage)createArray.push(...dataLocalStorage,product)
    else createArray.push(product)
    localStorage.setItem(`Lista`,JSON.stringify(createArray))
    handleReset()
  }
  const handleReset = ()=>{
    setLoader(true)
    setProduct("")
    document.getElementById("AddProduct").reset()
  }
  const getData = () =>{
    const localStorageData = JSON.parse(localStorage.getItem("Lista"))
    setData(localStorageData)
  }

  useEffect(getData, []);
  useEffect(() => {
    if(loader === false)return
    getData()
    setLoader(false)
  }, [loader]);

  return (
    <>
      <Header/>
      <AddProducts setProduct={setProduct} handleSubmit={handleSubmit}/>
      {
        data &&
        <MapProducts data={data} handleReset={handleReset}/>
      }
    </>
  );
}

export default App;
