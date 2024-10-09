import { useEffect, useState } from "react";
interface useFetchDataProps {
  url: string;
}

export function useFetchData<T>({url}:useFetchDataProps) {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    fetch(url)
     .then((value) => value.json())
     .then(data => setData(data))
     .catch(error => console.error('Error:', error));
  }, [url]);

  return {data}
}