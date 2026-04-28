import React from 'react'

interface skillPrps {
    skill?: string
}

const Skill = ({skill = ""}: skillPrps) => {
  return (
    <div className='rounded-xl py-5 flex items-center justify-center bg-gray-800'>
        <h3 className='font-bold text-[0.6rem] lg:text-[0.75rem]'>{skill}</h3>
    </div>
  )
}

export default Skill