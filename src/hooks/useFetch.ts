import { useEffect, useState } from "react";

export function useFetch<T>(url: string): { data: T[]; loading: boolean } {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => (res.ok ? res.json() : []))
      .then((json: T[]) => setData(json))
      .catch(() => setData([]))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
}
