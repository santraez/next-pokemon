import { useState, useEffect } from "react"

export const useScreenSize = () => {
  const [width, setWidth] = useState(innerWidth)
  const [height, setHeight] = useState(innerHeight)
  useEffect(() => {
    addEventListener("resize", handleResize)
    return () => removeEventListener("resize", handleResize)
  }, [])
  const handleResize = () => {
    setWidth(innerWidth)
    setHeight(innerHeight)
  }
  return { width, height }
}
