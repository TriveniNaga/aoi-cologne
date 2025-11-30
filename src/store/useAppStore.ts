import { create } from 'zustand';
import { Feature } from 'ol';

interface AppState {
  // Which view is active: map or image
  viewMode: 'map' | 'image';
  setViewMode: (mode: 'map' | 'image') => void;

  // Search query for city/area
  cityQuery: string;
  setCityQuery: (q: string) => void;

  // Selected Area of Interest (AOI) name
  selectedAreaName: string;
  setSelectedAreaName: (name: string) => void;

  // AOI features drawn on the map
  aoiFeatures: Feature[];
  setAoiFeatures: (features: Feature[]) => void;

  // Developer mode toggle (shows overlays)
  devMode: boolean;
  toggleDevMode: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  viewMode: 'map',
  setViewMode: (mode) => set({ viewMode: mode }),

  cityQuery: '',
  setCityQuery: (q) => set({ cityQuery: q }),

  selectedAreaName: '',
  setSelectedAreaName: (name) => set({ selectedAreaName: name }),

  aoiFeatures: [],
  setAoiFeatures: (features) => set({ aoiFeatures: features }),

  devMode: false,
  toggleDevMode: () => set((s) => ({ devMode: !s.devMode })),
}));
