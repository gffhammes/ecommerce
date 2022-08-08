import axios from "axios"
import { useEffect, useState } from "react"

const api = axios.create({
  baseURL: "/api"
})

export const useFetch = <T = unknown>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    api.get(url)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, isFetching, error }

}