'use client'

import { formatPrice } from "@/lib/utils"
import { useCartStore } from "@/store"
import {motion} from 'framer-motion'
import Image from "next/image"
import CheckoutButton from "./CheckoutButton"
import Checkout from "./Checkout"
import OrderCompleted from "./OrderCompleted"

export default function CartDrawer (){
    const useStore = useCartStore()

    const totalPrice = useStore.cart.reduce((acc, item)=>{
        return (acc + item.price! * item.quantity!)
    },0)

    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            onClick={()=> useStore.toggleCart()}
            className="bg-black/25 fixed left-0 top-0 w-full h-screen z-50"
        >
            <div
                onClick={(e=>e.stopPropagation())}
                className="bg-slate-600 absolute right-0 top-0 w-1/3 h-screen p-8 overflow-y-scroll"
            >
                <button onClick={()=>useStore.toggleCart()} className="font-bold text-sm text-teal-600">
                    Voltar para loja
                </button>
                <div className="border-t border-gray-400 my-4">
                </div>
                
                {useStore.cart.map((item)=>(
                    <motion.div 
                        animate={{scale:1, rotateZ:0, opacity: 0.75}}
                        initial={{scale:0.5, rotateZ:-10, opacity: 0}}
                        exit={{scale:0.5, rotateZ:-10, opacity: 0}}
                        key={item.id} className="flex gap-4 py-4"
                    >
                        <Image 
                            src={item.image}
                            alt={item.title}
                            width={120}
                            height={120}
                            className="object-cover w-24"

                        />
                        <div className="">
                            <h2 className="w-42 truncate">{item.title}</h2> 
                            <h2 className="">Quantidade: {item.quantity}</h2> 
                            <p className="text-teal-600 text-sm font-bold">{formatPrice(item.price)}</p>
                            <button onClick={()=> useStore.addProduct(item)} className="py-1 px-2 border rounded-md mt-2 text-sm mr-1">Adicionar</button>
                            <button onClick={()=> useStore.removeProduct(item)} className="py-1 px-2 border rounded-md mt-2 text-sm">Remover</button>
                        </div>

                        
                    </motion.div>
                ))}
                
                {useStore.cart.length >0 && useStore.onCheckout === 'cart' && (
                    <CheckoutButton totalPrice={totalPrice}/>

                )}
                {useStore.cart.length >0 && useStore.onCheckout === 'checkout' && (
                    <Checkout />

                )}
                {useStore.onCheckout === 'checkout' && (
                    <button onClick={()=> useStore.setCheckout('cart')} className="w-full rounded-md bg-teal-600 py-2 mt-2">Voltar ao carrinho</button>
                )}

                {useStore.onCheckout === 'success' && (
                    <OrderCompleted />
                )}
            </div>
        </motion.div>
    )
}