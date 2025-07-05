import React from 'react'
import Image from 'next/image'

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
    <section
      id="services"
      className="py-20 px-6 max-w-6xl mx-auto
      transition-colors duration-300 hover:bg-gray-100 focus-within:bg-gray-100"
    >
      <h2 className="text-4xl font-semibold mb-10 text-center">Services</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="shadow-lg rounded-lg overflow-hidden bg-white cursor-pointer
              transition transform duration-300 hover:shadow-2xl hover:scale-[1.03]"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={400}       // approximate width matching container
              height={192}      // keep aspect ratio close to original h-48 (12rem = 192px)
              className="object-cover w-full h-48"
              style={{ width: '100%', height: '192px' }} // for Next 13 style override
              priority={false}  // optional
            />
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
