import { configureStore } from '@reduxjs/toolkit'
import contractorReducer from '../features/contractors/contractorSlice'

export const store = configureStore({
    reducer: {
        contractors: contractorReducer,
    },
})