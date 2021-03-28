import React, { useEffect, useState } from 'react';

import { News } from '../news/News';
const apiUrl = process.env.REACT_APP_API_URL;

export function NewsList({flokk}) {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await fetch(apiUrl);
        const json = await result.json();
        if(flokk !== "index"){        
          for(let i = 0; i<json.length; i++)
            if(json[i].id===flokk){
              setTitle(json[i].title);
            }
         }
        setData(json);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  },[flokk]);

  
  
  return (
    <div>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ?(
        <p>loading</p>
      ):(
        <div>
        {(flokk === "index") ? (
          <div className="boxPool"> 
            
           {data.map(item => (
             <div className="box">
             <h3>{item.title}</h3>
             <News flokk = {item.id} amount = {5} ></News>
             <a href = {'/'+item.id}>Allar Fréttir</a>
             </div>
           ))}
           </div>
         ):(
           <div className="box">
             <h3>{title}</h3>
             <News flokk = {flokk} ></News>
             <a href ='/'>Til Baka</a>
           </div>
         )}
         </div>
      )}   
    </div>
  );
}
