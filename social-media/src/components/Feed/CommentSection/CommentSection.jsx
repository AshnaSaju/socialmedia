import React, {useEffect, useState } from 'react'
import './commentsection.css'

const CommentSection = () => {
  
  const [comment, setcomment] = useState('')
  const [data, setdata] = useState([
    {
        id:0,
        comment:'Hello good post'
    },
    {
        id:1,
        comment:'Hello good post'
    },
    {
        id:2,
        comment:'Hello good post'
    },
    {
        id:3,
        comment:'Hello good post'
    }
  ])


  const onChange = (e)=>{
    setcomment(e.target.value)
  }

  const onSend=()=>{
    const idprev = data[data.length-1].id
    console.log(idprev);
    setdata(prevData=>[...prevData,{id:idprev+1,comment}])
    console.log(data);
  }

  useEffect(() => {
    console.log('rerendered');
  }, [data])
  

  return (
    <div className='CommentSection'>
        <div className="displayComment">
            {data.map((item)=>{
                return <div key={item.id} className='Comment'>{item.comment}</div>
            })}
        </div>
        <div className="commentEntry">
            <input type="text" name='comment' placeholder='enter post text ' onChange={onChange}/>
            <button onClick={onSend}>Send Comment</button>
        </div>
    </div>
  )
}

export default CommentSection