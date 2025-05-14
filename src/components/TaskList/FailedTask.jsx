import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full w-[300px] p-5 bg-yellow-300 rounded-xl flex-shrink-0'>
    <div className='flex justify-between items-center'>
      <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
      <h4 className='text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <p className='text-sem mt-2'>
       {data.description}
      </p>
      <div className='mt-2'>
        <button className='bg-green-500 w-full py-1 px-2 text-sm rounded-md '> Failed</button>
       
      </div>
    </div>
  )
}

export default FailedTask
