import { create } from "zustand";
import { ProductFakeType, ProductType } from "./types/ProductType"
import { persist } from "zustand/middleware";

type CartState = {
    cart: ProductFakeType[];
    // addToCart: (product: ProductFakeType) => void;
    // removeFromCart: (productId: string) => void;
    isOpen: boolean;
    toggleCart: ()=>void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set)=>({
            cart: [],
            isOpen: false,
            toggleCart: () => set((state)=>({isOpen: !state.isOpen}))
        }),
        {name:'cart-storage'}
    )
)
