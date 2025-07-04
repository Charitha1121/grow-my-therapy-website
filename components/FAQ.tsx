'use client'
import React, { useState } from 'react'

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Do you accept insurance?',
      answer: 'No, but a superbill is provided for self-submission.',
    },
    {
      question: 'Are online sessions available?',
      answer: 'Yes—all virtual sessions are via Zoom.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: '24-hour notice is required.',
    },
  ]

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-6 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md mb-20 
      transition-colors duration-300 hover:bg-gray-100 focus-within:bg-gray-100">
      <h2 className="text-4xl font-semibold text-center mb-8 text-gray-900">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            tabIndex={0}
            onClick={() => toggle(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggle(index)
              }
            }}
            className={`border border-gray-300 rounded-md p-4 cursor-pointer bg-white shadow-sm
              transition-colors duration-20
              hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300`}
            aria-expanded={openIndex === index}
            role="button"
          >
            <h3 className="text-lg font-medium text-gray-800 flex justify-between items-center">
              {faq.question}
              <span className="text-xl select-none">{openIndex === index ? '−' : '+'}</span>
            </h3>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
