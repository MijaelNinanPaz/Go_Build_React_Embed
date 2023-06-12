function getSuspender(promise) {
    let status = "pending";
    let response;

    const suspender = promise.then(
        (res) => {
            status = "success";
            response = res;
        },
        (err) => {
            status = "error";
            response = err;
        }
    );

    const read = () => {
        switch(status) {
            case "pending":
                throw suspender;
            case "error":
                throw response;
            default:
                return response;
        }
    }

    return { read }
}

export function postData(url, postObject) {
    const promise = fetch(url, {
        method: 'POST',
        body: JSON.stringify(postObject),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(data => data);
    
    return getSuspender(promise);
}