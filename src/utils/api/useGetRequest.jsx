import { useState, useEffect } from 'react';

function useGetRequest(url) {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(url)
    .then(response=>response.json())
    .then(result=>setData(result.slice(0,5)))
    .catch(error=>setError(error))
      setTimeout(() => {
        setLoading(false)
      }, 2000);
  }, [url]);

  return { data, loading, error };
};

export default useGetRequest;
