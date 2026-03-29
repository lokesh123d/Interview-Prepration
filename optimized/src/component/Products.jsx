import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'
import Card from './Card';

const Products = () => {
const dispatch = useDispatch();
   const productsData =  useSelector((state)=>state.product.items)
  


useEffect(()=>{
dispatch(fetchProducts());
},[dispatch])


if(productsData.length<1){
    return <h2 className='loading'>Loading....</h2>
}

  return (
    <section className="products-section">
      <h2 className="products-heading">Products</h2>
      <div className="products-grid">
        {productsData.map((item)=>{
          return <Card key={item.id} item={item}/>
        })}
      </div>
    </section>
  )
}

export default Products