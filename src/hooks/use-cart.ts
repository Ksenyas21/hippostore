import {create} from 'zustand';
import {Product} from "@/payload-types";
import {createJSONStorage, persist} from "zustand/middleware";

export type CardItem = {
    product: Product
}

type CartState = {
    items: CardItem[]
    addItem: (product: Product) => void
    removeItem: (productId: string) => void
    clearCard: () => void
}
export const useCart = create<CartState>()(
    persist (
        (set) => ({
            items: [],
            addItem: (product) => set((state => {
                return {
                    items: [...state.items, { product }]
                }
            })),
            removeItem: (id) => set((state) => {
                    return {
                        items: state.items.filter((item) => item.product.id !== id)
                    }
                }),
            clearCard: () => set({items: []}),
        }),
        {
            name: 'card-storage',
            storage: createJSONStorage(() => localStorage)
        }
    )
)
