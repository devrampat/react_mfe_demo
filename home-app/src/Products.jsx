import React, {useEffect, useState } from 'react'; // Must be imported for webpack to work



function Products(props) {
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((response) => {
        setProducts(response.products);
    });
  }, [])


  return (
    <div className="Products">
       {
        products?.map((product, index) => {
            return (
                <div className='Item' key={index}>
                    <div className='title'>{product.title}</div>
                    <button onClick={props.updateCart}>Add to Cart</button>
                </div>
            )
        })
       }
    </div>
  );
}

export default Products;