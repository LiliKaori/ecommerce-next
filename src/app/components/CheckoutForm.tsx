import { formatPrice } from "@/lib/utils"
import { useCartStore } from "@/store"
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react"

export default function CheckoutForm ({clientSecret}:{clientSecret: string}){
    const stripe = useStripe()
    const elements = useElements()
    const [isLoading, setLoading]= useState(false)
    const cartStore = useCartStore()
    
    const totalPrice = cartStore.cart.reduce((acc, item)=>{
        return acc + item.price! * item.quantity!
    }, 0)

    const formattedPrice = formatPrice(totalPrice)

    useEffect(()=>{
        if(!stripe || !clientSecret) return
    }, [clientSecret, stripe])

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault()
        if(!stripe||!elements) return

        setLoading(true)

        stripe.confirmPayment({
            elements,
            redirect: "if_required"
        }).then((result)=>{
            if (!result.error){
                cartStore.setCheckout("success")
            }
            setLoading(false)
        })

    }
    
    return(
        <div className="flex">
            <form onClick={handleSubmit} id="payment-form" className="flex flex-col gap-2">                
                {/* <div className="flex flex-col w-full">
                    <label className="text-sm">Número do cartão</label>
                    <input placeholder="Digite o número" className="rounded-md py-2 px-3 bg-slate-800"></input>
                </div>
                <div className="flex gap-2">
                    <div className="flex flex-col w-full">
                        <label className="text-sm">Validade</label>
                        <input placeholder="xx/xx/xxxx" className="rounded-md py-2 px-3 bg-slate-800"></input>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-sm">CVC</label>
                        <input placeholder="xxx" className="rounded-md py-2 px-3 bg-slate-800"></input>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-sm">País</label>
                    <input placeholder="Digite o país" className="rounded-md py-2 px-3 bg-slate-800"></input>
                </div> */}
                <PaymentElement id='payment-element' options={{layout: 'tabs'}}/>
                <h1 className="py-4 font-bold">Total: {formattedPrice}</h1>
                <button 
                    disabled={!stripe || isLoading}
                    className="bg-teal-600 text-white py-2 px-4 rounded-md"
                >
                    {isLoading ? 'Carregando...' : 'Finalizar Compra'}
                </button>
                
            </form>
        </div>
    )
}