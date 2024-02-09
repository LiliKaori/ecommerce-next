'use server'

import { stripe } from "@/lib/stripe"
import { ProductFakeType, ProductType } from "@/types/ProductType"

// export async function fetchProducts (): Promise<ProductFakeType[]> {
  
//   const response = await fetch('https://fakestoreapi.com/products')
  
//   if(!response.ok){
//     throw new Error('Failed to fetch data')
//   }

//   return response.json()
  
// }

export async function fetchProducts ({ lastProductId }: {lastProductId?: string| undefined }) {
  const params = lastProductId ? { starting_after: lastProductId, limit: 6}: {limit:6}

  const {data: products, has_more}= await stripe.products.list(params)
  // const products = await stripe.products.list()
  // console.log(products)
  const formatedProducts = await Promise.all(
    products.map(async (product)=>{
      const price = await stripe. prices.list({
        product: product.id,
      })
      return {
        id: product.id,
        price: price.data[0].unit_amount,
        title: product.name,
        image: product.images[0],
        description: product.description,
        currency: price.data[0].currency,
      }
    })
  )

  return {formatedProducts, has_more}
  // return formatedProducts
}