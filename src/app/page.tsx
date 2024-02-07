import { ProductFakeType, ProductType } from "@/types/ProductType"
import Product from "./components/Product"
import Stripe from "stripe"

async function getProducts (): Promise<ProductFakeType[]> {
  
  const response = await fetch('https://fakestoreapi.com/products')
  
  if(!response.ok){
    throw new Error('Failed to fetch data')
  }

  return response.json()
  
}

export default async function Home() {
  
  const products = await getProducts()
  // console.log(products)
  return (
    <div className="max-w-7xl mx-auto px-8 py-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {products.map((product: ProductFakeType)=>{
          return(
            <Product key={product.id} product={product}/>
             
          )  
        })}
                

      </div>
      
    </div>
  );
}
