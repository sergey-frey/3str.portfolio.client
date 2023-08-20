import axios from "axios";
import { useEffect, useState } from "react";

interface UseFetchResponse<T> {
  data: T | undefined;
  isLoading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): UseFetchResponse<T> {
  const [data, setData] = useState<T | undefined>(() => undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (e) {
        setError("Ошибка при получении данных");
      }
      setIsLoading(false);
    };

    fetchSkills();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}
