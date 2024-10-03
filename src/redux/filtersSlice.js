import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        name: "",
    },
    reducers: {
        changeFilter: (state,actions) => {
            return {
                ...state,
                name: actions.payload
            }
        }
    }
})

// Селектор для получения значения фильтра
export const selectNameFilter = (state) => state.filters.name;

// Экспортируем редюсер и экшены
export const {changeFilter} = filterSlice.actions;
export default filterSlice.reducer;