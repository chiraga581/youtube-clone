import React from 'react'
import { commentsData } from '../utils/commentsData'
import Comment from './Comment'

const CommentsList = ({comments}) => {
    return comments.map((comment,index) =>  (
        <div key={index} className=''>
            <Comment  data={comment} />
            <div className='pl-5 ml-5 my-2'>
              <CommentsList comments={comment.replies}/>
            </div>
        </div>
    ));  
    
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments Section: </h1>
        <CommentsList comments = {commentsData} />
    </div>
  )
}

export default CommentsContainer