import React from 'react'

const Hero = () => {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            Community Board
          </h1>
          <p className="my-4 text-xl text-white">
          We’re excited to have you here! 🎉 Whether you're here to learn, share, or connect, this is your space to engage with others who share your interests. Feel free to introduce yourself, ask questions, and contribute to discussions. Let’s grow together and make this community even better! 👥✨
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero