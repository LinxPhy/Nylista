import './Homepage.css'
import axios from 'axios'

import CreatePost from '../../components/createPost'
import { useQuery } from 'react-query';
import Post from '../../components/post';

async function getPosts() {

    try {
        const res = await axios.post(import.meta.env.VITE_GET_POSTS_URL, {})
        return res.data
    } catch (err: any) {
        console.log(err)
    }
}


function Homepage() {

    const { data, status } = useQuery('posts', getPosts)

    if (status === 'loading') return <div>Loading...</div>
    if (status === 'error') return <div>An error has occurred</div>

    return (
        <div className='Homepage'>
            <CreatePost />
            <Post data={data} />
        </div>
    )

}

export default Homepage
