import { useState } from "react"

export const useLocalStorage = (key, initialValue="") => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") return initialValue
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (err) {
      return console.log(err)
    }
  })
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== "undefined") return localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (err) {
      return console.log(err)
    }
  }
  return [storedValue, setValue]
}
