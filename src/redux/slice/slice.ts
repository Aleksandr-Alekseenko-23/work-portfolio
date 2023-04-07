import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language: 'en',
};

const languageSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;

export const selectLanguage = (state: { language: LanguageState }): string =>
  state.language.language;
