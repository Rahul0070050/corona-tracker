import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState({});
    const [loading, setLoding] = useState(false);
    useEffect(() => {
        setLoding(true)
        fetch(url)
            .then(response => {
                if (response.ok) return response.json()
            }).then(data => {
                setData(data)
                setLoding(false)
            })
    }, [])

    return [loading, data]
}

export default useFetch;
