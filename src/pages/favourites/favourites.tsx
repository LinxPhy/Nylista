import './favourites.css'
import axios from 'axios'
import Post from '../../components/post';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';



function Favourites() {

    // const { data, status, refetch } = useQuery('favourites', getPosts)
    const [favourites, setFavourites] = useState([])

    async function getPosts() {

        try {
            const res = await axios.post(import.meta.env.VITE_FAVOURITES_URL, {})
            setFavourites(res.data)
            console.log(res.data)
        } catch (err: any) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])
    
    // if(!data) return <div>Loading...</div>

    return (
        <div className="Favourites">
            { favourites && (
                <Post data={favourites} />
            )}
            
            {/* { favourites.map((post: any) => (
                <div className='post' key={post._id}>
                    {post.title}
                </div>
            ))} */}
        </div>
    );

}

export default Favourites;