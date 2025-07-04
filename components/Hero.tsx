'use client'

import { useRef, useEffect } from 'react'
import CountUp from 'react-countup'

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5 // slow motion
    }
  }, [])

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center bg-black/50 text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Healing Minds. Changing Lives.
        </h1>
        <h2 className="text-2xl font-light mb-6">
          Dr. Serena Blake, Clinical Psychologist
        </h2>

        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition mb-10 text-lg sm:text-xl"
        >
          Book a Free Consult
        </a>

        {/* 🧠 Animated Counters with plus sign */}
        <div className="flex flex-col sm:flex-row gap-16 text-white font-extrabold">
          <div className="flex flex-col items-center">
            <div className="flex items-center text-6xl sm:text-7xl leading-none">
              <CountUp end={8} duration={3} />
              <span className="text-5xl sm:text-6xl ml-2 align-baseline">+</span>
            </div>
            <span className="mt-3 text-3xl sm:text-4xl text-gray-300 tracking-wide">
              Years of Experience
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center text-6xl sm:text-7xl leading-none">
              <CountUp end={500} duration={3} />
              <span className="text-5xl sm:text-6xl ml-2 align-baseline">+</span>
            </div>
            <span className="mt-3 text-3xl sm:text-4xl text-gray-300 tracking-wide">
              Client Sessions
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
