import React from 'react'

export default function Button({title , leftIcon, rightIcon , containerClass , id}) {
  return (
    <button id={id} className={`group relative z-10 w-fit overflow-hidden cursor-pointer rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
      {leftIcon}
      <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
      <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  )
}
