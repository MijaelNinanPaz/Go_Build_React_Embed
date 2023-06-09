import { createSlice } from '@reduxjs/toolkit';

export const contractorSlice = createSlice({
    name: 'contractors',
    initialState: {
        list: [
            { id: 1, name: 'David', last_name: 'Copperfield', phone_number: '123456789', direccion: 'Dirección 1' },
            { id: 2, name: 'Benjamin', last_name: 'Franklin', phone_number: '987654321', direccion: 'Dirección 2' },
            { id: 3, name: 'Jimmy', last_name: 'Hendrix', phone_number: '112233445', direccion: 'Dirección 3' },
        ],
    },
    reducers: {
        setContractors: (state, action) => {
            state.list = action.payload
        },
        addContractor: (state, action) => {
            state.list = [ action.payload, ...state.list ]
        },
        updateContractor: (state, action) => {
            state.list = state.list.map( item => item.id === action.payload.id ? action.payload : item )
        }
    }
})

export const { setContractors, addContractor, updateContractor } = contractorSlice.actions
export default contractorSlice.reducer