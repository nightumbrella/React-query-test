import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query';

const Data2 = () => {
    const {isLoading, data} = useQuery("data-xs", () => {
        return axios.get("http://localhost:4000/user")
    })
    if(isLoading){
    return <h1>Loading Data 2...</h1>;
    }
  return (
    <div>
      <h1>DATA2</h1>
      {data?.data.map((items) => (
        <div key={items.id}>
        <h2 >{items.email}</h2>
        <h2 >{items.phone}</h2>
        <h2 >{items.website}</h2>
        </div>
      ))}
    </div>
  )
}

export default Data2