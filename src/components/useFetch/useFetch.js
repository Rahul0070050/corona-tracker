import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState({});
    const [loading, setLoding] = useState(true);
    useEffect(() => {
        fetch(url)
            .then(response => {
                if (response.ok) return response.json()
            }).then(data => {
                setData(data)
                setLoding(false)
            })
    }, [url])

    return [loading, data]
}

export default useFetch;
