import { create } from "zustand";

export const useCounterStore = create((set) => ({
  count: 0,
  increase: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decrease: () =>
    set((state) => ({
      count: Math.max(0, state.count - 1),
    })),
    
//   reset: () =>
//     set((state) => ({
//       count: 0,
//     })),

    // short hand property for above 
  reset: () =>
    set({count:0}),
}));
