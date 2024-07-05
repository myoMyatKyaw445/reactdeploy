import {  useEffect,useState } from 'react';
import './App.css';
import useFetch from './hooks/usefetch';

import Live from './live';
import Logo from './logo';
import Button from './liveButton';
function App() {
  //const [showloading, setShowLoading] = useState(false);
  let [url,setUrl] = useState('https://react-json-server-pc4h.vercel.app/');
  let { data , loading , live }= useFetch(url)
  
  let [filterLive,setFilteredLive] = useState([]);
  
  useEffect(() => {
    setFilteredLive(live);
  }, [live]);
  const handleClick = (m3u8Url) => {
    const isAndroid = /Android/i.test(navigator.userAgent);
  if(isAndroid){
    const networkStreamPlayerURL = `intent://${m3u8Url}#Intent;scheme=http;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=PLAYIDTV;end`;
    // Try to open the custom URL
    window.location.href = networkStreamPlayerURL;
    } else {
    // Show a message or provide a fallback for non-Android devices
    alert("This feature is only available on Android devices.");
  }
  }
   
  const handleLogoClick = (title) =>{
    console.log(title);
    const filteredLive = live.filter((item) => item.title === title);
    setFilteredLive(filteredLive);
  }

  const allLogoClick = () => {
       setFilteredLive(live);
  }

  return (
    <div className="container">
      <Logo onLogoClick={handleLogoClick} allLogoClick={allLogoClick}/>
     
      
      {
        filterLive && <Live live={filterLive} handleClick={handleClick} />
      }
      
      
     
     <div>
         { loading &&
           <div id="load">
           <div>G</div>
           <div>N</div>
           <div>I</div>
           <div>D</div>
           <div>A</div>
           <div>O</div>
           <div>L</div>
           </div>
         }
         
         
         
       </div>
    </div>

  );
}

export default App;


