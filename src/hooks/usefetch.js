import {  useEffect , useState } from "react"

function useFetch(url){
    let [data,setData] = useState('')
    let [live,setLive] = useState([]);
    let [loading,setLoading] = useState(false);
    let [error,setError] = useState(null);

   
    useEffect(() =>{
      setLoading(true);
        fetch(url)
        .then(res => {
          if(!res.ok){
            throw Error("Something Went Wrong");
          }
          return res.json();
        })
        .then(data => {
            setData(data.myanmarchannel);
            setLive(data.live);
            setLoading(false);
            setError(null)
            console.log(live)
            
        })
        .catch(e => {
          setError(e.message)
        })
       
      },[url])
     
      return {
        data,
        live,
        loading,
        error
      }
}

export default useFetch;
