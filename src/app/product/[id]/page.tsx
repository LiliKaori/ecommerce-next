

import AddCart from "@/app/components/AddCart";
import ProductImage from "@/app/components/ProductImage";
import { formatPrice } from "@/lib/utils";
import { ProductFakeType } from "@/types/ProductType";
import Stripe from "stripe";

type ProductPageProps ={
    params:{
        id: string;
    }
}

async function getProduct(id: string): Promise<ProductFakeType>{
    const response = await fetch('https://fakestoreapi.com/products')
  
    if(!response.ok){
        throw new Error('Failed to fetch data')
    }

    const products = await response.json()
    
    const findProduct = products.filter((item:ProductFakeType)=> item.id == id)
    
    return findProduct[0]
}

// async function getProduct(id:string){
//     const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//         apiVersion: '2023-10-16'
//     })
//     const product = await stripe.products.retrieve(id)
//     const price = await stripe.prices.list({
//         product: product.id
//     })

//     return {
//         id: product.id,
//         price: price.data[0].unit_amount,
//         name: product.name,
//         image: product.images[0],
//         description: product.description,
//     }
// }

export default async function ProductPage({ params:{id} }: ProductPageProps){
    const product: ProductFakeType = await getProduct(id)
    
    return (
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-8 p-10">
            <ProductImage product={product} />
            <div className="flex flex-col">
                <div className="pb-4">
                    <h1 className="text-2xl font-bold text-gray-300">{product.title}</h1>
                    <h2 className="text-xl text-teal-600 font-bold">{formatPrice(product.price)}</h2>
                </div>
                <div className="pb-4">
                    <p className="text-sm text-gray-400">{product.description}</p>
                </div>
                <AddCart product={product}/>
            </div>
            
        </div>
    )
    
}