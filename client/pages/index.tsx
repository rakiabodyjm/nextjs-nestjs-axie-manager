import { useEffect } from "react";
import axios from "axios";
export default function Home() {
  useEffect(() => {
    axios.get("/").then((res) => {
      console.log(res);
    });
  }, []);
  return <div></div>;
}
