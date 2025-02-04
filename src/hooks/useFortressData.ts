import { useEffect, useState } from "react";
import { FortressData } from "../components/types";
import { API_KEY } from "../constants";

const API_URL = "https://api.jsonbin.io/v3/b/679b63e7e41b4d34e481312c/latest";

export const useFortressData = (): {
  data: FortressData | null;
  error: string | null;
  loading: boolean;
} => {
  const [data, setData] = useState<FortressData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            "X-Master-Key": API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        setData(result.record);
      } catch (err) {
        if (err instanceof Error) setError(err.message);

        setError("An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};
