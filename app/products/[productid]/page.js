import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/shared/button";
import useCart from "@/store/cartStore";


const getProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};

const ProductDetaiksPage = async ({ params }) => {
  const pageparams = await params;
  const id = await pageparams.productid;
  const pro = await getProduct(id);
  console.log(pro);

  return (
    <div className="hero bg-white min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={pro.image}
          className="max-w-sm rounded-lg shadow-2xl"
          width={250}
          height={250}
          alt="product"
        />
        <div>
          <h1 className="text-5xl font-bold">{pro.category}</h1>
          <p className="py-6">{pro.description}</p>
          <p className="pb-5"> {pro.title}</p>
          <p className="text-green-600 pm-10">{pro.price}</p>
          <div className="flex justify-end">
            <Link href={`/products`}>
              <button className="btn btn-warning"> Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetaiksPage;
