import { useState } from 'react';
import axios from 'axios';

function usePostRequest(url) {
    const [data,setData] =useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    const postData = async (inputs) => {
        try {
            const response = await axios.post(url,inputs)
            const result = await response.data
            setData(console.log(result))
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
