import { create } from 'zustand';

export enum AppTheme { LIGHT = 'light', DARK = 'dark' };
export enum PageFlip { HORIZONTAL = 'horizontal', VERTICAL = 'vertical' };
export enum AppFonts {
  ROBOTO = 'roboto',
  ROBOTO_MONO = 'roboto_mono',
  PTSERIF = 'pt_serif',
  SHANTELL = 'shantell_sans',
};
export enum AppFontsName {
  roboto = 'Roboto',
  roboto_mono = 'Roboto mono',
  pt_serif = 'PT Serif',
  shantell_sans = 'Shantell sans',
};
type AppFontState = AppFonts.ROBOTO | AppFonts.ROBOTO_MONO | AppFonts.PTSERIF | AppFonts.SHANTELL;
type PageFlipState = PageFlip.VERTICAL | PageFlip.HORIZONTAL;

interface AppState {
  activeFont: AppFontState;
  activeFontSize: number;
  activeComments: boolean;
  activeFlip: PageFlipState;
  activeWordWrap: boolean;
}

interface AppActions {
  setFontSize: (x: boolean) => void;
  setFont: (x: AppFontState) => void;
  setCommentsView: (x: boolean) => void;
  setPageFlip: (x: PageFlipState) => void;
  setWordWrap: (x: boolean) => void;
}

export const useAppStore = create<AppState & AppActions>((set) => ({
  activeFont: AppFonts.ROBOTO,
  activeFlip: PageFlip.HORIZONTAL,
  activeFontSize: 16,
  activeComments: true,
  activeWordWrap: false,
  setWordWrap: () => set((state) => ({ activeWordWrap: !state.activeWordWrap })),
  setPageFlip: (x) => set(() => ({ activeFlip: x })),
  setFontSize: (x) => set((state) => ({ activeFontSize: x ? state.activeFontSize + 1 : state.activeFontSize - 1 })),
  setFont: (x) => set(() => ({ activeFont: x })),
  setCommentsView: (x) => set(() => ({ activeComments: x })),
}));