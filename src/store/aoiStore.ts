import { create } from 'zustand';

interface AOIState {
  selectedArea: string;
  setSelectedArea: (area: string) => void;
}

export const useAOIStore = create<AOIState>((set) => ({
  selectedArea: '',
  setSelectedArea: (area) => set({ selectedArea: area }),
}));
