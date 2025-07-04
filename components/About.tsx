import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto
      transition-colors duration-300 hover:bg-gray-100 focus-within:bg-gray-100">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src="/images/dr-serena.jpg"
          alt="Dr. Serena Blake"
          className="w-64 h-64 rounded-full object-cover"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Meet Dr. Serena Blake</h2>
          <p className="text-gray-700 mb-2">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
            with eight years of experience and over 500 client sessions.
          </p>
          <p className="text-gray-700">
            She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—
            with compassionate, personalized care to help you overcome anxiety, strengthen
            relationships, and heal from trauma.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
