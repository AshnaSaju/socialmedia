import React from 'react'
import Message from '../Message/Message'
import CommentSection from './CommentSection/CommentSection'
import './feed.css'
const Feed = () => {
    return (
        <div className='feed'>
            <CommentSection/>
            <Message/>
        </div>
    )
}

export default Feed