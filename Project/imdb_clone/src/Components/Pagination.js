import React from 'react'

const Pagination = ({onPrev, onNext, currPage}) => {
  return (
    <div className='flex justify-center items-center gap-4'>
        <button onClick={onPrev} className='rounded-lg border-4 border-blue-800 m-4 p-2'>Previous</button>
        <div>{currPage}</div>
        <button onClick={onNext} className='rounded-lg border-4 border-blue-800 m-4 p-2'>Next</button>
    </div>
  )
}

export default Pagination