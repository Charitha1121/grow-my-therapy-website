import React from 'react'

interface Service {
  title: string
  description: string
  image: string
}

const services: Service[] = [
  {
    title: 'Anxiety & Stress Management',
    description:
      'Learn coping strategies, mindfulness, and CBT techniques to reduce overwhelming anxiety and manage everyday stress.',
    image: '/images/anxiety.jpeg',
  },
  {
    title: 'Relationship Counseling',
    description:
      'Supportive therapy for couples and individuals working through communication challenges and emotional connection.',
    image: '/images/relationship.webp',
  },
  {
    title: 'Trauma Recovery',
    description:
      'A safe space to process trauma and begin healing through evidence-based and compassion-focused care.',
    image: '/images/trauma.jpg',
  },
]

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-6 max-w-6xl mx-auto
      transition-colors duration-300 hover:bg-gray-100 focus-within:bg-gray-100">
      <h2 className="text-4xl font-semibold mb-10 text-center">Services</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="shadow-lg rounded-lg overflow-hidden bg-white cursor-pointer
              transition transform duration-300 hover:shadow-2xl hover:scale-[1.03]"
          >
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
