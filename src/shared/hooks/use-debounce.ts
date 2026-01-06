import { useEffect, useState } from 'react'

export const useDebounce = (value?: number, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay)

    return () => clearTimeout(timeout)
  }, [delay, value])

  return debounceValue
}
