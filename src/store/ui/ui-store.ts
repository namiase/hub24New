import { create } from 'zustand';

interface State {
  isSideMenuOpen: boolean;
  openSideMenu: () => void;
  closedSideMenu: () => void;
}
export const useUIStore = create<State>()((set) => ({
  isSideMenuOpen: false,
  openSideMenu: () => set({ isSideMenuOpen: true }),
  closedSideMenu: () => set({ isSideMenuOpen: false }),
}));
