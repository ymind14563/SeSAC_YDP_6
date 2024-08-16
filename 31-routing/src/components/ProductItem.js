import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  // { userId, id, title, body }
  console.log('product >>> ', product);

  return (
    <>
      <Link to={`/products/${product.id}`}>
        <ul>
          <li>상품명 : {product.title}</li>
          <li>상세설명 : {product.body}</li>
        </ul>
      </Link>
      <hr />
    </>
  )
}
