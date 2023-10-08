import '../styles/post.css'
import formatDate from './formatDate'

const Post = (data: any) => {

    return (
        <div className='posts'>

            {data.data.map((post: any) => (
                <div className='post' key={post._id}>
                    <div className='post_header'>
                        <h5>{post?.title}</h5>

                        <div className='post_info'>

                            <div className='post_info_items'>
                                <div className='post_info_item'>
                                    {post?.topic}
                                </div>

                                <div className='post_info_item'>
                                    Status: {post?.status}
                                </div>
                            </div>

                            <span className='datetime'>{formatDate(post?.created)} </span>
                        </div>
                    </div>

                    <div className='post_main'>
                        <p>{post?.content}</p>
                    </div>

                    {/* 
                        due date,
                    */}

                    <div className='post_footer'>
                        {post?.tags && (
                            <div className='footer-icons'>
                                {post?.tags.map((tag: any, key: any) => (
                                    <div className={`footer-icon footer-icon-${key}`} key={key}>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        <div className='post_footer_icons'>
                            <Icons data={post?.status} />

                            {post?.priority && (
                                <div className='icon'>
                                    <span className={`material-symbols-outlined priority-${post.priority} `}>
                                        priority_high
                                    </span>
                                </div>
                            )}

                            <div className='icon'>
                                <span className="material-symbols-outlined">
                                    bookmark
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            ))}
        </div>
    )


}

const Icons = (status: any) => {

    switch (status.data) {
        case 'none':
            return <None />
        case 'active':
            return <Active />
        case 'InProgress':
            return <InProgress />
        case 'pending':
            return <Pending />
        case 'cancelled':
            return <Cancelled />
        case 'completed':
            return <Completed />
        case 'closed':
            return <Closed />
        default:
            return <None />
    }

    function None() {
        return (
            <div className='icon'>
                <span className="material-symbols-outlined icon-none">
                    circle
                </span>
            </div>
        )
    }

    function Active() {
        return (
            <div className='icon'>
                <span className="material-symbols-outlined icon-active">
                    play_arrow
                </span>
            </div>
        )
    }

    function InProgress() {
        return (
            <div className='icon'>
                <span className="material-symbols-outlined icon-schedule">
                    clock_loader_40
                </span>
            </div>
        )
    }

    function Pending() {
        return (
            <div className='icon'>
                <span className="material-symbols-outlined icon-pending">
                    pending
                </span>
            </div>
        )
    }

    function Cancelled() {
        return (
            <div className='icon'>
                <span className="material-symbols-outlined icon-close">
                    close
                </span>
            </div>
        )
    }

    function Completed() {
        return (
            <div className='icon'>
                <span className="material-symbols-outlined icon-check_circle">
                    check_circle
                </span>
            </div>
        )
    }

    function Closed() {
        return (
            <div className='icon'>
                <span className="material-symbols-outlined icon-closed">
                    archive
                </span>
            </div>
        )
    }

}

export default Post
