import { useState } from 'react'

export default function useForm (initialObject = {}) {
  const [form, setForm] = useState(initialObject)
  const serializeForm = (form) => {
    const formData = new FormData(form)
    const completeObject = {}
    for (const [name, value] of formData) {
      completeObject[name] = value
    }
    return completeObject
  }
  const changed = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const submitted = (e) => {
    e.preventDefault()
    setForm(serializeForm(e.target))
  }
  return { form, changed, submitted }
}
