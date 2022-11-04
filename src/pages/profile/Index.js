import { useState } from "react";

export default function Profile() {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  console.log(data);
  return (
    <>
      <input name="name" onChange={change} />
      <input name="password" onChange={change} />
    </>
  );
}
