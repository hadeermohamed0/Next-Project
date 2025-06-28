import { create } from "zustand";
const useCart = create((set) => ({
  cart: [],
  inc: (addedpro) =>
    set((state) => {
      return {
        cart: [...state.cart, addedpro],
      };
    }),
}));

export default useCart;
