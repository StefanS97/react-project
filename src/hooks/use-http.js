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
      let newData = [];
      for (const i in data) {
        newData.push({ id: i, ...data[i] });
      }
      setData(newData);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, []);

  return { loading, error, sendRequest };
};

export default useHttp;
