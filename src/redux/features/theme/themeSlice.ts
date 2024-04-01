import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
        localStorage.setItem("theme", state.theme.toString());
        document.documentElement.classList.add("dark");
      } else {
        state.theme = "light";
        localStorage.setItem("theme", state.theme.toString());
        document.documentElement.classList.remove("dark");
      }
    },
    initialTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme.toString());
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDarkMode, initialTheme } = themeSlice.actions;

export default themeSlice.reducer;
