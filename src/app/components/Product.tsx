import { ProductType } from "@/types/ProductType"

export type ProductProps = {
    product: ProductType
}

export default function Product ({product} : ProductProps){
    return(
        <div className="flex flex-col shadow-lg h-96 bg-slate-800 px-5 text-gray-300">
            <div className="bg-white relative max-h-72 flex-1">
                <h2 className="border">{product.image}</h2>
            </div>
            <div className="bg-white flex justify-between font-bold my-3">
                <p className="border">{product.title}</p>
                <p className="border">R$ {product.price}</p>
            </div>
            
            <button className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center">Adicionar ao Carrinho</button>
            
        </div>  
    )
}