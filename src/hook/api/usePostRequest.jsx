import { useState } from 'react';
import axios from 'axios';

function usePostRequest({url='',successCB = () => { }}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    const postData = async ({body={}}) => {
        try {
            const response = await axios.post(url, body)
            const result = await response.data
            console.log(result)
            setData(result)
            if(result.sts === '00'){
                alert(result.msg)
            }
            if(result.sts === '01'){
                successCB({data:result})
            }
        } catch (error) {
            setError(error)
        }
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

    return { data, loading, error, postData };
};

export default usePostRequest;
