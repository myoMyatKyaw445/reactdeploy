import React from 'react'

export default function Button() {
  const buttonClick = (index) =>{
    console.log("helloworld",index)
  }
  return (
    <div className='btnContainer'>
        <div className='button' onClick={buttonClick}>
            <button className='btn btn-primary btn-sm'>Line 1</button>
            <button className='btn btn-primary btn-sm'>Line 2</button>
            <button className='btn btn-primary btn-sm'>Line 3</button>
            <button className='btn btn-primary btn-sm'>Line 4</button>
            <button className='btn btn-primary btn-sm'>Line 5</button>
        </div>
    </div>
  )
}
