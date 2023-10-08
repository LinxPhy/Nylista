import './topics.css'
import CreateTopic from '../../components/createTopic';

function Topic(){

    return(

        <div className='topics'>

            <CreateTopic />

            <div className='topic'>
                Main
            </div>
        </div>
    )

}

export default Topic;