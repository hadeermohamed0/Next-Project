import React, { Suspense } from "react";

import ProductCart from "@/components/productCart";


const pageList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return (
    <>
      {data.map((item) => (
        <ProductCart key={item.id} item={item} />
      ))}
    </>
  );
};

const ProductPage = async () => {
  return (
    <div className="p-30 ">
      <h1 className="text-3xl font-bold mb-4 ">Products</h1>
      <div className="flex flex-wrap gap-4 justify-around">
        <Suspense fallback={<p>Loding products....................</p>}>
          {pageList()}
        </Suspense>
      </div>
    </div>
  );
};

export default ProductPage;
