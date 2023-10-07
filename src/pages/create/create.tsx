import './create.css'
import axios, { AxiosError } from 'axios';
import { useMutation } from 'react-query'
import Error from '../../components/error';
import { useState, useEffect } from 'react'

const handleSubmit = async (data: any) => {

    try {

        const res = await axios.post(import.meta.env.VITE_CREATE_POST_URL, data);

    } catch (err: any) {

        console.log(err);

        if (err instanceof AxiosError && err.response?.data?.errors) {
            const errors = err.response.data.errors;
            const new_err = (Object.values(errors) as any)[0].message as string;
            // setError(new_err);
            // <Error message={new_err} />

        } else if (err instanceof AxiosError && err.response?.data?.error) {
            const message = err.response.data.error.message;
            <Error message={message} />

        } else {
            const message = 'an error has occurred';
            <Error message={message} />

        }

    }
}

function Create() {

    const initialState = {
        title: '',
        content: '',
        tags: [] as string[],
        topic: 'main',
        priority: 'none',
        dueDate: '',
        status: 'new'
    };

    const { mutate, data, status } = useMutation(handleSubmit);
    const [tagValue, setTagValue] = useState('');
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState('');

    const handleTags = () => {

        if (formData.tags.length >= 5 || tagValue === '') {
            return;
        }

        setFormData({ ...formData, tags: [...formData.tags, tagValue] });
        setTagValue('');

    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        mutate(formData as any);
    }


    // if (status === 'loading') return <div>Loading...</div>
    // if (status === 'error') return <div>An error has occurred</div>
    // if (status === 'success') return <div>Post created successfully</div>

    return (
        <div className='Create'>

            <form onSubmit={(e) => onSubmit(e)} >

                {error ?
                    <Error message={error} />
                    : null}

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder='Enter Your Title' className="form-control inputStyle2" maxLength={60} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                    <span>{formData.title.length} / 60 </span>
                </div>

                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea placeholder='Enter Your Content' className="form-control inputStyle2" maxLength={3000} onChange={(e) => setFormData({ ...formData, content: e.target.value })}></textarea>
                    <span>{formData.content.length} / 3000 </span>
                </div>

                <div className="form-group form-group-tags">
                    <label htmlFor="tags">Tags</label>
                    <input type="text" placeholder='Enter up to 5 tags' maxLength={30} className="form-control inputStyle2" onChange={(e) => setTagValue(e.target.value)} value={tagValue} />
                    <button className="buttonStyle1" type='button' onClick={() => handleTags()} style={{ padding: '10px 15px', width: 'min-content' }} >+</button>
                    <div>
                        <span>{tagValue.length} / 30 </span>
                        <span>{formData.tags.length} / 5 </span>
                    </div>
                </div>

                {formData.tags.length > 0 && (
                    <div className="form-group form-group-tags">
                        {formData.tags.map((tag, index) => (
                            <div key={index} className='tag'>
                                <p>{tag}</p>
                                <input type='button' className="buttonStyle1" onClick={() => setFormData({ ...formData, tags: formData.tags.filter((tag, i) => i !== index) })} style={{ padding: '0px 5px', width: 'min-content', height: 'min-content' }} value='x' />
                            </div>
                        ))}
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="topic">Topic</label>
                    <select className="form-control inputStyle2" onChange={(e) => setFormData({ ...formData, topic: e.target.value })}>
                        <option value={"main"}>Main</option>
                        <option>Topic 2</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="priority">Priority</label>
                    <select className="form-control inputStyle2" defaultValue={"none"} onChange={(e) => setFormData({ ...formData, priority: e.target.value })}>
                        <option value={"none"}>None</option>
                        <option value={"low"}>Low</option>
                        <option value={"medium"}>Medium</option>
                        <option value={"high"}>High</option>
                    </select>
                </div>

                <div className="form-group form-group-date">
                    <label htmlFor="dueDate">Due Date</label>
                    <input type="date" className="form-control inputStyle2" onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select className="form-control inputStyle2" defaultValue={"new"} onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
                        <option value={"new"}>New</option>
                        <option value={"open"}>Open</option>
                        <option value={"in-progress"}>In progress</option>
                        <option value={"cancelled"}>Cancelled</option>
                        <option value={"completed"}>Completed</option>
                        <option value={"closed"}>Closed</option>
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