import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/liveChatSlice';
import { generateRandomNames, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage , setLiveMessage] = useState(null)
    const chatMessages = useSelector((store) => store.liveChat.messages)
    useEffect(()=>{
        const i = setInterval(()=>{

            // API Polling 
            

            dispatch(addMessage({
                name:generateRandomNames(),
                message : makeRandomMessage(30),
            }))
        },1000)

        return () => clearInterval(i);
    },[])
  return (
    <>
        <div className='ml-3 p-2 flex flex-col-reverse border border-black w-full h-[550px] bg-slate-100 rounded-lg overflow-y-scroll no-scrollbar'>
            <div>
                {chatMessages.map ((chat , index) => 
                    <ChatMessage key={index} name={chat.name} message={chat.message}/>
                )}
            </div>
            
        </div>
               
        <form className='border border-black w-full p-2 ml-3 rounded-lg ' 
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                    name: "Chirag",
                    message: liveMessage
                }))
                setLiveMessage("")
            }}
        >
            <input
                value={liveMessage}
                onChange={(e)=>{setLiveMessage(e.target.value)}}
                type='text'
                className='w-64 rounded-lg px-2 '
            />
            <button className='px-2 mx-2 bg-green-200 rounded-xl'>
                Send
            </button>
        </form>
    </>
  )
}

export default LiveChat