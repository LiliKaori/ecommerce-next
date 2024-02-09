import { useCartStore } from "@/store"
import { useEffect, useState } from "react"
import CheckoutForm from "./CheckoutForm"
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js"
import { Elements, PaymentElement } from "@stripe/react-stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Checkout (){
    const cartStore = useCartStore()
    const [clientSecret, setClientSecret] =useState('')

    useEffect(()=>{
        fetch('/api/create-payment-intent',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: cartStore.cart,
                payment_intent_id: cartStore.paymentIntent
            })
        }).then((res)=>{return res.json()}).then((data)=>{
            cartStore.setPaymentIntent(data.paymentIntent.id)
            setClientSecret(data.paymentIntent?.client_secret)
        })
    }, [cartStore, cartStore.cart, cartStore.paymentIntent])

    const options: StripeElementsOptions = {
        clientSecret,
        appearance: {
            theme: "night",
            labels: "floating",
        }
    }

    return(
        
        <div>
            {clientSecret ? (
                // 
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm clientSecret={clientSecret} />
                </Elements>

            ) : (
                <div>
                    <h2>Carregando...</h2>
                </div>
            )}

            
        </div>
    )
}