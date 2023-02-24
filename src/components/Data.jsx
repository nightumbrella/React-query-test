import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:4000/user").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>DATA</h1>
      {data.map((items) => (
        <h2 key={items.id}>{items.name}</h2>
      ))}
    </div>
  );
};

export default Data;
