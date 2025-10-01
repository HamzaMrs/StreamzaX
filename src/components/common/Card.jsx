import React from 'react'

export default function Card({ children, className = '' }) {
  return (
    <div className={[ 'rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800 shadow-sm', className ].join(' ')}>
      {children}
    </div>
  )
}


