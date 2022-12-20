import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [loading, setLoding] = useState(true);
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(url)
        .then(response => {
                if (response.ok) return response.json()
            }).then(data => {
                setLoding(false)
                setdata(data)
            }).catch(err => {
                console.log(err);
            })
        }, [])
        return [loading, data]

}

export default useFetch;
