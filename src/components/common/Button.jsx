import React from 'react'

export default function Button({ variant = 'primary', className = '', ...props }) {
  const cls = [
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
    variant === 'primary' ? 'bg-white text-black hover:bg-neutral-200' : 'bg-transparent border border-neutral-500 text-white hover:bg-neutral-800',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return <button className={cls} {...props} />
}


