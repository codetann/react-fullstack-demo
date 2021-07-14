import { useEffect, useState, useRef } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setStatus("loaded");
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchData();
  }, []);

  return [data, status];
}
