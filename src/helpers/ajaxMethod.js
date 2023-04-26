export const ajaxMethod = async ({ url, method, body="", file=false }) => {
  let loading = true
  let typeMethod
  switch (method) {
    case "GET" || "DELETE":
      typeMethod = { method }
      break
    case "POST" || "PUT":
      if (file) {
        typeMethod = { method, body }
      } else {
        typeMethod = {
          method,
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" }
        }
      }
      break
  }
  const response = await fetch(url, typeMethod)
  const data = await response.json()
  loading = false
  return { data, loading }
}
