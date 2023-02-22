import React from 'react'
import './Message.css'
const Message = () => {
    return (
        <div className="message">
            <div className="success">
                <div>Success</div>
                <div>Post is successfully Added</div>
            </div>
            <div className="error">
                <div>Error</div>
                <div>Illegal Content Please Remove</div>
            </div>
        </div>
        
    )
}
export default Message 