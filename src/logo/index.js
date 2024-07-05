import React, { useState } from 'react'
import './index.css';
import Live from '../live';
export default function Logo({onLogoClick,allLogoClick}) {
     
 
  return (
    <div className='logoContainer'>
        <div className='logo'>
            <img src="https://t.ly/Ub32g" onClick={() => allLogoClick('')}/>
            <img src="https://rb.gy/uq2ei7" onClick={() => onLogoClick("English Premier League")}/>
            <img src="https://rb.gy/m584e4" onClick={() => onLogoClick("Spain Laliga")}/>
            <img src="https://rb.gy/yt4oag" />
            <img src="https://rb.gy/0ekmjw" />
            <img src="https://rb.gy/2e6uur"  />
        </div>
    </div>
  )
}
