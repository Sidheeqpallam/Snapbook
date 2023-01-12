import { useState } from "react";
import useTitle from "../../Title";

export default function Profile() {
  useTitle("profile", true);
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
