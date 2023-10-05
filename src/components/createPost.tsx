import { useNavigate } from "react-router-dom"

const CreatePost = () => {

    const navigate = useNavigate()

    return(
        <div className='CreatePost'>
            <div className="create_post_area">
                <input type='text' placeholder='Add a new post' className="inputStyle2" style={{padding: '20px 100px 20px 20px'}} />
                <button className="buttonStyle1" style={{ padding: '10px' }} onClick={() => navigate('/create')}>Create</button>
            </div>
        </div>
    )

}

export default CreatePost