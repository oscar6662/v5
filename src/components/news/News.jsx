import React, { useEffect, useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

export function News({ flokk  }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await fetch(apiUrl+flokk);
        const json = await result.json();
        setData(json.items);
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
        <div>Loading ...</div>
      ) : (
        <div class = "app">
          {data.map(item => (
            <p>{item.title}</p>
          ))}
        </div>
          
      )}
    </div>
  );
}
