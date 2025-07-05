import React from 'react'
import Image from 'next/image'

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-5xl mx-auto
        transition-colors duration-300 hover:bg-gray-100 focus-within:bg-gray-100"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        <Image
          src="/images/dr-serena.jpg"
          alt="Dr. Serena Blake"
          width={256}      // approx 64 * 4 (w-64 = 16rem)
          height={256}     // h-64 same as width
          className="rounded-full object-cover"
          priority        // optional: preloads image for faster LCP
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
