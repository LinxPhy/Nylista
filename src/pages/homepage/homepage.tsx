import './Homepage.css'
import axios from 'axios';
import formatDate from '../../components/formatDate'
import CreatePost from '../../components/createPost'
import { useQuery } from 'react-query';

async function getPosts() {
    
    try{
        const res = await axios.post(import.meta.env.VITE_GET_POSTS_URL, {})
        return res.data
    } catch(err: any){
        console.log(err)
    }
}


function Homepage(){

    const { data, status } = useQuery('posts', getPosts)

    if(status === 'loading') return <div>Loading...</div>
    if(status === 'error') return <div>An error has occurred</div>


    return(
        <div className='Homepage'>
            <CreatePost />
            
            { data.map((post: any) => (

                <div className='post' key={post._id}>
                    <div className='post_header'>
                        <h5>{post?.title}</h5>
                        <span> { formatDate(post?.created)} </span>
                        {/* tags, topic */}
                    </div>
                    
                    <div className='post_main'>
                        <p>{post?.content}</p>
                    </div>

                    <div className='post_footer'>
                        {/* 
                            priority,
                            due date,
                            status,
                        */}
                    </div>
                    
                </div>

            ))}

        </div>
    )

}

export default Homepage
