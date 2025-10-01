import React from 'react'

export default function HeroSection({ title, overview, backdropUrl }) {
  return (
    <section className="relative h-56 md:h-80 lg:h-96">
      {backdropUrl && (
        <img src={backdropUrl} alt={title} className="w-full h-full object-cover opacity-60" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute left-6 bottom-6 space-y-2 max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
        {overview && <p className="text-neutral-300 text-sm md:text-base line-clamp-3">{overview}</p>}
      </div>
    </section>
  )
}


