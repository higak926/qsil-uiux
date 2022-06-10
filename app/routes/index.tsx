import React from "react";
import axios from "axios";
export default function Index() {
  const [data, setData] = React.useState();
  const url = "https://k1lan0.deta.dev/";

  const getData = () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };
  return (
    <>
      <div>Hello</div>
      {data ? (
        <div>{data.Hello}</div>
      ) : (
        <button onClick={getData}>データを取得</button>
      )}
    </>
  );
}
