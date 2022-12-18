/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ProductItem = ({ product, addToCartHandler }) => {
  return (
    <div className="card">
      <Link href={`product/${product.slug}`}>
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full shadow"
          />
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center p-5 font-medium">
        <Link href={`product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
