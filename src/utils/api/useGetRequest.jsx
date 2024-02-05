import { useState, useEffect } from 'react';

function useGetRequest(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error)
      }
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useGetRequest;
