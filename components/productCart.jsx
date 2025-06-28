"use client";
import Image from "next/image";
import Button from "./shared/button";
import useCart from "@/store/cartStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductCart = ({ item }) => {
  const { inc, cart } = useCart();
  const router = useRouter();
  const handelRoute = () => {
    router.push(`/products/${item.id}`);
  };
  return (
    <div className="card bg-white w-76 shadow-sm ">
      <figure className="h-100">
        <Image
          src={item.image}
          alt={item.title}
          width={250}
          height={50}
          className="object-cover p-4 min-h-15"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p className="text-green-600">{item.price}</p>
        <div className="card-actions justify-evenly">
          <Button
            onClick={() => inc(item)}
            className="btn btn-primary"
            children="Add To Cart"
          />
          {/* <Link href={`/products/${item.id}`}>
            <button className="btn btn-warning">Details</button>
          </Link> */}
          <Button
            onClick={() => handelRoute()}
            className="btn btn-warning"
            children="Details"
          />
        </div>
      </div>
    </div>
  );
};
export default ProductCart;
