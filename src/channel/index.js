import React from 'react'
import './index.css'
export default function Channel({data,handleClick}) {
  


const channelClick = () =>{
     handleClick();
  }

  
  return (
    <>    
    <h3>LocalChannel</h3>
      <div className='categoryContainer'>
         
           {data &&
           
             data.map((data,index) => (
              <div key={data.id} className='category' onClick={channelClick}>
               
               <img className='image' src={data.images} />
               <h6>{data.title}</h6>
               </div>
             ))
           }
          
      </div>
      </>

  )
}
