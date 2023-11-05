import React from 'react'

const Button = ({name}) => {
  return (
    <div >

        <button className='py-1 px-2 m-2 bg-gray-200  rounded-md'>{name}</button>

    </div>
  )
}

export default Button