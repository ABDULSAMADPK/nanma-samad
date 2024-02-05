import { useState } from 'react';

function usePostRequest(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    const postData = async (inputs) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
            });
            const result = await response.json();
            setData(result);
        } catch (error){
            setError(error)
        }
        setTimeout(() => {
            setLoading(false)
          }, 2000);
    }

    return { data, loading, error, postData };
};

export default usePostRequest;
