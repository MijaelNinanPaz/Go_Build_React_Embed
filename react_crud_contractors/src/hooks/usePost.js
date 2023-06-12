import { useState, useEffect } from "react";


export function usePost(url, objectToPost, reducer, dispatch) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [controller, setController] = useState(null)


    useEffect(() => {
        const abortController = new AbortController();
        setController(abortController);
        setLoading(true);
        fetch( url, {
            method: 'POST',
            signal: abortController.signal,
            headers: {
                Accept: 'application/json',
                // 'accept': 'application/json',
                // 'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(objectToPost)
        })
            .then( response => response.json())
            .then( data => dispatch(reducer(data)))
            .catch( error => {
                if(error.name === "AbortError") {
                    console.log("Request cancelled");
                } else {
                    setError(error)
                }
            })
            .finally(() => setLoading(false))

        return () => abortController.abort();
    }, [])

    const handleCancelRequest = () => {
        if(controller){
            controller.abort();
            setError("Request cancelled");
        }
    }
    return { loading, error, handleCancelRequest }
}