import axios from "axios";
import { useEffect, useState } from "react";

function useApiFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    axios.get(process.env.REACT_APP_BASE_URL + url).then(response => {
      setData(Object.entries(response.data.service_places).map(item => { return { name: item[0], slug: item[1] } }));
      setSuccess(true);
    }).catch(error => {
      setError(error)
      throw new Error('Request failed');
    }).finally(() => setIsLoading(false))
  };
  useEffect(() => fetchData(), [])
  return { data, error, isLoading, isSuccess };
}
export default useApiFetch;