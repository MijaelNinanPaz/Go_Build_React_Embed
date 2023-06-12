import { createSlice } from '@reduxjs/toolkit';

export const contractorSlice = createSlice({
    name: 'contractors',
    initialState: {
        list: [],
        loadingPost: false,
        errrorPost: null,
        loadingPut: false,
        errrorPut: null
    },
    reducers: {
        setContractors: (state, action) => {
            state.list = action.payload;
        },
        addContractor: (state, action) => {
            state.list = [ action.payload, ...state.list ];
        },
        updateContractor: (state, action) => {
            state.list = state.list.map( item => item.id === action.payload.id ? action.payload : item );
        },
        removeContractor: (state, action) => {
            state.list = state.list.filter( item => item.id !== action.payload );
        },
        setLoadingPost: (state, action) => {
            state.loadingPost = action.payload;
        },
        setErrorPost: (state, action) => {
            state.errrorPost = action.payload;
        },
        setLoadingPut: (state, action) => {
            state.loadingPut = action.payload;
        },
        setErrorPut: (state, action) => {
            state.errrorPut = action.payload;
        },
        setLoadingDelete: (state, action) => {
            state.loadingPut = action.payload;
        },
        setErrorDelete: (state, action) => {
            state.errrorPut = action.payload;
        }
    }
})

export const {
    setContractors,
    addContractor,
    updateContractor,
    removeContractor,
    setLoadingPost,
    setErrorPost,
    setLoadingPut,
    setErrorPut,
    setLoadingDelete,
    setErrorDelete
} = contractorSlice.actions

export default contractorSlice.reducer

const url = import.meta.env.VITE_URL_BACKEND_CONTRACTORS;

//GET request
// export const fetchContractors = () => (dispatch) => {
//     dispatch(setLoadingFetch(true))
//     const abortController = new AbortController();
//     fetch( url, {
//         method: 'GET',
//         signal: abortController.signal,
//         headers: {
//             Accept: 'application/json',
//             // 'accept': 'application/json',
//             'Content-Type': 'application/json',
//             // 'Authorization': `Bearer ${token}`
//         }
//         // body: JSON.stringify({})
//     })
//     .then( response => response.json())
//     .then( data => dispatch(setContractors(data)))
//     .catch( error => dispatch(setErrorFetch(error)))
//     .finally(() => dispatch(setLoadingFetch(false)))
// }

//POST
export const postContractor = (data) => (dispatch) => {
    dispatch(setLoadingPost(true))
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            // Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => {
        dispatch(setErrorPost(error))
        console.log("Error: ", error)
    })
    .then(response => {
        dispatch(addContractor(response));
        console.log(response, "response post")
    })
    .finally(() => dispatch(setLoadingPost(false)))
}

//PUT
export const putContractor = (data) => (dispatch) => {
    dispatch(setLoadingPut(true))
    let currentUrl = url
    if (data.prototype.hasOwnProperty.call('id')) {
        currentUrl += "/" + data.id
    }
    fetch(currentUrl, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => {
        dispatch(setErrorPut(error))
        console.log("Error: ", error)
    })
    .then(response => {
        dispatch(updateContractor(response));
        console.log(response, "response post")
    })
    .finally(() => dispatch(setLoadingPut(false)))
}

//DELETE
export const deleteContractor = (id) => (dispatch) => {
    dispatch(setLoadingDelete(true))
    const currentUrl = url + "/" + id
    fetch(currentUrl, {
        method: 'DELETE',
        // body: JSON.stringify({}),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => {
        dispatch(setErrorDelete(error))
        console.log("Error: ", error)
    })
    .then(response => {
        dispatch(removeContractor(id));
        console.log(response, "response post")
    })
    .finally(() => dispatch(setLoadingDelete(false)))
}
