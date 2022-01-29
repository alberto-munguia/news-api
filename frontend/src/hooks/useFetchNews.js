import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchNews = (filter) => {
    const [news, setNews] = useState({
        data     : [],
        isLoading: true,
    })

    useEffect(() => {
        async function getData() {
            console.log('filter', filter);
            return axios.get('http://localhost:4000/latest-news', {
                headers: { 'Content-Type': 'application/json' },
                params : { filter },
            }).then(({ data }) => {
                console.log('data', data);
                setNews({ data: data, isLoading: false })
            })
        }

        getData()
    }, [filter]);

    return news
}
