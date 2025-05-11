'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors((prev) => ({ ...prev, [e.target.name]: '' })) // clear error on input
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.licenseType.trim()) newErrors.licenseType = 'License type must be selected'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setSubmitted(true)
    alert('Form submitted successfully (demo only)')
    // You can send formData to a server here.
  }

  return (
    <section
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Contact Us
        </h2>

        {submitted && (
          <div className="mb-6 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-4 py-3 rounded">
            Thank you! We will get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Your Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Your Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Company</label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
            />
            {errors.company && <p className="text-red-600 text-sm mt-1">{errors.company}</p>}
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">License Type</label>
            <select
              name="licenseType"
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">Select License Type</option>
              <option value="Office">Office Software</option>
              <option value="Antivirus">Antivirus</option>
              <option value="Design">Design Tools</option>
            </select>
            {errors.licenseType && (
              <p className="text-red-600 text-sm mt-1">{errors.licenseType}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Your Message</label>
            <textarea
              name="message"
              rows={5}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
            ></textarea>
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
