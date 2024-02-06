import React from 'react'
import useGetRequest from '../../utils/api/useGetRequest'

function HomePage() {

  const apiUrl = 'https://fakestoreapi.com/users'

  const {data:getData, loading:getLoading, error:getError} = useGetRequest(apiUrl)

  if (getLoading) {
    return <p>Loading...</p>;
  }

  if (getError) {
    return <p>Error: {getError.message}</p>;
  }
  return (
    <div>
        {getData.map((item)=>
          <p className='text-3xl p-6 text-orange-700 text-center'>name: {item.username}</p>
          )}
    </div>
  )
}

export default HomePage