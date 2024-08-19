import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
    name: 'bank',
    initialState : { deposit : 0 },
    reducers: {
        plus: (state, action) => {
            state.deposit += action.payload;
        },
        minus: (state, action) => {
            state.deposit -= action.payload;
        }
    }
})

export const { plus, minus } = bankSlice.actions;
export default bankSlice.reducer;