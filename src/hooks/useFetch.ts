import { useEffect, useState } from 'react';

type useFetchProps = {
  url: string
}

export default function useFetch<T>({ url }: useFetchProps): { data: T | null, loading: boolean; error: string | null } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    let ignore = false;

    setLoading(true);

    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        if (!ignore) {
          setData(data);
        }
      })
      .catch(() => setError( "An error occurred."))
      .finally(() => setLoading(false))

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, error, loading };
}