import { createSlice } from '@reduxjs/toolkit';

export const contractorSlice = createSlice({
    name: 'contractors',
    initialState: {
        list: [],
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

const url = import.meta.env.VITE_URL_BACKEND_CONTRACTORS;

export const fetchContractors = () => (dispatch) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        dispatch(setContractors(data))
    })
}

export const postContractor = (data) => (dispatch) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error: ', error))
    .then(response => {
        dispatch(addContractor(response));
        console.log(response, "response post")
    });
}