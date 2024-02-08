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

// async function getProducts (): Promise<ProductType[]> {
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//     apiVersion: '2023-10-16',
//   })
  
//   const products= await stripe.products.list()
//   const formatedProducts = await Promise.all(
//     products.data.map(async (product)=>{
//       const price = await stripe. prices.list({
//         product: product.id,
//       })
//       return {
//         id: product.id,
//         price: price.data[0].unit_amount,
//         title: product.name,
//         image: product.images[0],
//         description: product.description,
//         currency: price.data[0].currency,
//       }
//     })
//   )
//   return formatedProducts
// }

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
