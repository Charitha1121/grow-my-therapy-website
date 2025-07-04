'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react'

interface FormData {
  name: string
  phone: string
  email: string
  message: string
  time: string
  agree: boolean
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  message?: string
  time?: string
  agree?: string
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    time: '',
    agree: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!form.message.trim()) newErrors.message = 'Please share what brings you here'
    if (!form.time.trim()) newErrors.time = 'Preferred time is required'
    if (!form.agree) newErrors.agree = 'You must agree to be contacted'
    return newErrors
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section className="py-20 px-6 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Thank you for reaching out!</h2>
        <p className="text-gray-700">Dr. Serena will get back to you soon.</p>
      </section>
    )
  }

  return (
    

    <section id="contact" className="py-20 px-6 max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-md-100
    transition-colors duration-300 hover:bg-gray-100 focus-within:bg-gray-100">
         
  {/* Contact content */}
      <h2 className="text-4xl font-semibold text-center mb-8 text-gray-900">Contact Dr. Serena Blake</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-1 text-gray-800">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full border px-4 py-2 rounded focus:outline-none
              focus:ring-2 focus:ring-blue-400
              ${errors.name ? 'border-red-500' : 'border-gray-300'}
              transition-colors duration-200
              hover:border-blue-400`}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-800">Phone</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={`w-full border px-4 py-2 rounded focus:outline-none
              focus:ring-2 focus:ring-blue-400
              ${errors.phone ? 'border-red-500' : 'border-gray-300'}
              transition-colors duration-200
              hover:border-blue-400`}
          />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-800">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full border px-4 py-2 rounded focus:outline-none
              focus:ring-2 focus:ring-blue-400
              ${errors.email ? 'border-red-500' : 'border-gray-300'}
              transition-colors duration-200
              hover:border-blue-400`}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-800">What brings you here?</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className={`w-full border px-4 py-2 rounded focus:outline-none
              focus:ring-2 focus:ring-blue-400
              ${errors.message ? 'border-red-500' : 'border-gray-300'}
              transition-colors duration-200
              hover:border-blue-400`}
          />
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-800">Preferred time to reach you</label>
          <input
            type="text"
            name="time"
            value={form.time}
            onChange={handleChange}
            className={`w-full border px-4 py-2 rounded focus:outline-none
              focus:ring-2 focus:ring-blue-400
              ${errors.time ? 'border-red-500' : 'border-gray-300'}
              transition-colors duration-200
              hover:border-blue-400`}
          />
          {errors.time && <p className="text-red-600 text-sm mt-1">{errors.time}</p>}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-800">I agree to be contacted</label>
        </div>
        {errors.agree && <p className="text-red-600 text-sm">{errors.agree}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact
