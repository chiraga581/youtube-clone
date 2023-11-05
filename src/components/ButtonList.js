import React from 'react'
import Button from './Button'

const ButtonList = () => {

    const list = ["All","Gaminng","Music","Sports","Apple","Cricket","REACT", "NODE-JS" , "MERN" ,"Football","Misceleneous","Robots","Javascript" , "JAVA"];
  return (
    <div className='flex '>
       { list.map((items , index) => <Button key={index} name={items}/>)}
    </div>
  )
}

export default ButtonList