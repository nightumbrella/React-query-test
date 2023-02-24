import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [data, setData] = useState([]);
  const [isLoadingset, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:4000/user").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoadingset) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>DATA</h1>
      {data.map((items) => (
        <div key={items.id}>

        <h2>{items.name}</h2>
        <h2>{items.phone}</h2>
        <h2>{items.website}</h2>
        </div>
      ))}
    </div>
  );
};

export default Data;
