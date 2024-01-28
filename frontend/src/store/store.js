import { create } from "zustand";
const userAuthStore = create((set, get) => ({
  userData: null,
  loading: false,
  socket: null,
  setUser: (user) => set({ userData: user }),
  setLoading: (loading) => set({ loading }),
  isLoggedIN: () => get().userData !== null,
}));
export { userAuthStore };
