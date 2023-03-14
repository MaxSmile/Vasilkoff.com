import { createSlice } from '@reduxjs/toolkit';
import Aos from 'aos';

const initialState = {
    theme: typeof window === 'undefined' ? 'light' : localStorage.getItem('theme') || 'light',
    direction: typeof window === 'undefined' ? 'ltr' : localStorage.getItem('direction') || 'ltr',
};

const themeConfigSlice = createSlice({
    name: 'themeConfig',
    initialState: initialState,
    reducers: {
        toggleTheme(state, { payload }) {
            payload = payload || state.theme; // light | dark
            localStorage.setItem('theme', payload);
            state.theme = payload;
            if (state.theme === 'dark') {
                document.querySelector('body')?.classList.add('dark');
            } else {
                document.querySelector('body')?.classList.remove('dark');
            }
        },
        toggleDirection(state, { payload }) {
            payload = payload || state.direction; // rtl, ltr
            localStorage.setItem('direction', payload);
            state.direction = payload;

            document.querySelector('html')?.setAttribute('dir', state.direction || 'ltr');
            Aos.refresh();
        },
    },
});

export const { toggleTheme, toggleDirection } = themeConfigSlice.actions;

export default themeConfigSlice.reducer;
