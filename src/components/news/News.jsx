import React, { useEffect, useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

export function News({ flokk, amount }) {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await fetch(apiUrl+flokk);
        const json = await result.json();
        if(amount === 5){
          setNews(json.items.slice(0,amount));          
        }else{
          setNews(json.items);
        }
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);

    };
 
    fetchData();
  },[]);


  return (
    <div>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading news ...</div>
      ) : (
        <ul class = "list">
          {news.map(item => (
            <li><a href = "{item.link}">{item.title}</a></li>
          ))}
        </ul>
 
      )}
    </div>
  );
}
