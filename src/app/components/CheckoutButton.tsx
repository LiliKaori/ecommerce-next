import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


export default function CheckoutButton ({totalPrice}:{totalPrice:number}){
    const router = useRouter()
    const cartStore = useCartStore()

    const {user} = useUser()

    const handleCheckout = async () => {
        if(!user){
            cartStore.toggleCart()
            router.push(`/sign-in?redirectUrl=''`)
        }
        cartStore.setCheckout('checkout')
    }
    return(
        <div>
            <p className="text-teal-600 font-bold">Total: {formatPrice(totalPrice)}</p>
            <button onClick={()=> handleCheckout()} className="w-full rounded-md bg-teal-600 py-2 mt-2"> Finalizar compra</button>
        </div>
    )
}