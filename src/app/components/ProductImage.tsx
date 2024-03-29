'use client'

import { ProductFakeType, ProductType } from "@/types/ProductType"
import Image from "next/image";
import { useState } from "react";

type ProductFakeImageProps = {
    product: ProductFakeType;
    fill?: boolean;
}

type ProductImageProps = {
    product: ProductType;
    fill?: boolean;
}

export default function ProductImage ({product, fill}: ProductImageProps){
    
    const [loading, setLoading] = useState(true)
    
    return fill?(
        <Image 
            src={product.image}
            fill
            alt={product.title}
            className={`object-cover ${
                loading
                    ? 'scale-100 blur-3xl grayscale'
                    : 'scale-100 blur-0 grayscale-0'
            }`}
            onLoadingComplete={()=> setLoading(false)}
        />
    ):(
        <Image 
            src={product.image}
            // src= "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            width={400}
            height={700}
            alt={product.title}
            className={`object-cover ${
                loading
                    ? 'scale-100 blur-3xl grayscale'
                    : 'scale-100 blur-0 grayscale-0'
            }`}
            onLoadingComplete={()=> setLoading(false)}
        />
    )
}