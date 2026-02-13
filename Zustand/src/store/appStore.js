import {create} from "zustand"

const useAppStore = create((set)=>({

     // Auth Slice
      user: "Hitesh",
  login: (user) => set({ user:"Hitesh" }),
  logout: () => set({ user: null }),

  //UI slice
  theme: "light ☀️",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light ☀️" ? "dark 🌙" : "light ☀️" })),


}))
export default useAppStore