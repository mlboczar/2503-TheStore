import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import axios from 'axios'


function App() {

  //STEP 1
  const [products, setProducts] = useState() //state all that matters in react?

  useEffect(() => {
    const fetchProducts = async() => {
      try{
        const {data} = await axios.get('/api/products') //how do we find this path?
        console.log(data)

        setProducts(data) //update state
      }catch (error){
        console.log(error)
      }
    }
    fetchProducts()
  }, []) //runs one time

  return (
    <div>
      <Products products={products}/>
    </div>
  )
}

export default App
