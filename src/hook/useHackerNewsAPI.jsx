import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  //   const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(initialUrl);

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      // unmounted components
      isMounted.current = false;
    };
  }, []);

  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      if (isMounted.current) {
        setData(response.data || []);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(`Error: ${error}`);
    }
  };

  useEffect(() => {
    handleFetchData.current();
  }, [url]);

  return {
    data,
    // query,
    // setQuery,
    setUrl,
    loading,
    errorMessage,
  };
}
