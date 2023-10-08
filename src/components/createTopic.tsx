import { useState } from 'react';

const CreateTopic = () => {

    const [modal, setModal] = useState(false);

    const handleOverlay = () => {
        setModal(!modal);
    }

    return (
        <>
            <div>
                <button className="buttonStyle1" onClick={() => handleOverlay()} style={{padding:'20px 25px', marginBottom: '20px'}}>
                    Create Topic
                </button>
            </div>

            {modal && (
                <div className='modal'>
                    <div className='overlay' onClick={() => handleOverlay()}></div>
                    <div className='modal-content'>
                        <TopicModal />
                    </div>
                </div>
            )}
        </>
    )

}


const TopicModal = () => {

    return(
        <div className='topic-modal'>
            <label >Topic Name</label>
            <input type='text' className='inputStyle2' placeholder='Create Topic' />
            <button className='buttonStyle1' style={{padding: '8px 10px'}}>+</button>
        </div>
    )


}

export default CreateTopic;