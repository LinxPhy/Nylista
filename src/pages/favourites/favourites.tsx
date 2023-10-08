import './favourites.css'
import axios from 'axios'
import Post from '../../components/post';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';

async function getPosts() {

    try {
        const res = await axios.post(import.meta.env.VITE_FAVOURITES_URL, {})
        return res.data
    } catch (err: any) {
        console.log(err)
    }
}

function Favourites() {

    const { data, status, refetch } = useQuery('favourites', getPosts)

    // handle data changing
    useEffect(() => {
        console.log('data changed')
        refetch()
    }, [])

    if (status === 'loading') return <div>Loading...</div>
    if (status === 'error') return <div>An error has occurred</div>

    return (
        <div className="Favourites">
            <Post data={data} />
        </div>
    );

}

export default Favourites;