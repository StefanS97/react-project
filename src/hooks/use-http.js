import { useCallback, useState } from "react";

const useHttp = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const sendRequest = useCallback(async (requestSettings, setData) => {
    const { url, method, headers, body } = requestSettings;

    setError(false);
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: method ? method : "GET",
        headers: headers ? headers : {},
        body: body ? JSON.stringify(body) : null,
      });
      if (!response.ok) {
        throw new Error("Oops... something went wrong!");
      }
      const data = await response.json();

      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, []);

  return { loading, error, sendRequest };
};

export default useHttp;
