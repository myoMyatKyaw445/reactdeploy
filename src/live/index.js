import "./index.css";
import { useState } from "react";

export default function Live({ live }) {
  const [localShowButton, setLocalShowButton] = useState(false);
  const [hidebutton,setHideButton] = useState(false);
  /*const hideandshowButton = () => {
   // const newShowButtonState = !localShowButton;
   // setLocalShowButton(newShowButtonState);
    //setShowButton(newShowButtonState);
    setHideButton(true);
  };*/
  const [selectedItemId, setSelectedItemId] = useState(null);

  const hideandshowButton = (id) => {
    setSelectedItemId(selectedItemId === id ? null : id);
    console.log(selectedItemId)
    console.log(id)
    
  };
  return (
    <div>
      <h3>Live Match</h3>
      
      <div className="liveContainer">
        {live && live.map((liveItem) => (
          <div className="allItem" key={liveItem.id} onClick={() => hideandshowButton(liveItem.id)}>
            <div className="time">
              <h6>{liveItem.title}</h6>
              <h6>{liveItem.time}</h6>
            </div>
            <div className="live">
              <>
                <h6>{liveItem.home}</h6>
                <img src={liveItem.homeImg} alt={`${liveItem.home} logo`} />
              </>
              <>
                <img src={liveItem.awayImg} alt={`${liveItem.away} logo`} />
                <h6>{liveItem.away}</h6>
              </>
             
            </div>
            {
              selectedItemId === liveItem.id  && <div className='btnContainer'>
               <div className='button'>
                   <button className='btn btn-primary btn-sm' onClick={() => console.log(liveItem.m3u8)}>Line 1</button>
                   <button className='btn btn-primary btn-sm' onClick={() => console.log(liveItem.m3u8One)}>Line 2</button>
                   <button className='btn btn-primary btn-sm' onClick={() => console.log(liveItem.m3u8Two)}>Line 3</button>
                   <button className='btn btn-primary btn-sm' onClick={() => console.log(liveItem.m3u8Three)}>Line 4</button>
                   <button className='btn btn-primary btn-sm'onClick={() => console.log(liveItem.m3u8Four)}>Line 5</button>
               </div>
           </div>
            }
           
          </div>
        ))}
      </div>
    </div>
  );
}
