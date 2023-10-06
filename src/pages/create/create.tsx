import './create.css'
import Error from '../../components/error';
import { useState, useEffect } from 'react'

function Create() {

    const initialState = {
        title: '',
        content: '',
        tags: [] as string[],
        topic: '',
        priority: '',
        dueDate: '',
        status: ''
    };

    const [tagValue, setTagValue] = useState('');
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState('');

    const handleTags = () => {

        if(formData.tags.length >= 5 || tagValue === '') {
            return;
        }

        setFormData({...formData, tags: [...formData.tags, tagValue]});
        setTagValue('');
        
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        setError('Please fill out all fields');
    }

    const clearErrorMessage = () => {
        setError('');
    }

    useEffect(() => {
        if(error){
            setTimeout(() => {
                setError("")
            }, 5000)
        }
    }, [error])


    return (
        <div className='Create'>

            <form onSubmit={(e) => handleSubmit(e)} >

                <div className="ErrorMessages">
                    {error? 
                        <div className='error' onClick={() => clearErrorMessage()}>
                            <Error message={error}/>
                        </div>
                    : null}
                </div>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder='Enter Your Title' className="form-control inputStyle2" maxLength={60} onChange={(e) => setFormData({...formData, title: e.target.value})} />
                    <span>{formData.title.length} / 60 </span>
                </div>

                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea placeholder='Enter Your Content' className="form-control inputStyle2" maxLength={3000} onChange={(e) => setFormData({...formData, content: e.target.value})}></textarea>
                    <span>{formData.content.length} / 3000 </span>
                </div>

                <div className="form-group form-group-tags">
                    <label htmlFor="tags">Tags</label>
                    <input type="text" placeholder='Enter up to 5 tags' maxLength={30} className="form-control inputStyle2" onChange={(e) => setTagValue(e.target.value)} value={tagValue}  />
                    <button className="buttonStyle1" type='button' onClick={() => handleTags()} style={{ padding: '10px 15px', width: 'min-content' }} >+</button>
                    <div>
                        <span>{tagValue.length} / 30 </span>
                        <span>{formData.tags.length} / 5 </span>
                    </div>
                </div>

                {formData.tags.length > 0  && (
                    <div className="form-group form-group-tags">
                        {formData.tags.map((tag, index) => (
                            <div key={index} className='tag'>
                                <p>{tag}</p>
                                <input type='button' className="buttonStyle1" onClick={() => setFormData({...formData, tags: formData.tags.filter((tag, i) => i !== index)})} style={{ padding: '0px 5px', width: 'min-content', height: 'min-content' }} value='x' />
                            </div>
                        ))}
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="topic">Topic</label>
                    <select className="form-control inputStyle2" onChange={(e) => setFormData({...formData, topic: e.target.value})}>
                        <option>Topic 1</option>
                        <option>Topic 2</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="priority">Priority</label>
                    <select className="form-control inputStyle2" onChange={(e) => setFormData({...formData, priority: e.target.value})}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>

                <div className="form-group form-group-date">
                    <label htmlFor="dueDate">Due Date</label>
                    <input type="date" className="form-control inputStyle2" onChange={(e) => setFormData({...formData, dueDate: e.target.value})} />
                </div>

                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select className="form-control inputStyle2" onChange={(e) => setFormData({...formData, status: e.target.value})}>
                        <option>Open</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                    </select>
                </div>

                <div className='form-group'>
                    <button type='submit' className="buttonStyle1">Create</button>
                </div>

            </form>

        </div>
    )

}

export default Create;