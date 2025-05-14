import React from 'react';

const NewTask = ({ data }) => {
  console.log("NewTask Data:", data);

  return (
    <div className='h-full w-[300px] p-5 bg-blue-300 rounded-xl flex-shrink-0'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.priority || "Medium"}</h3>
        <h4 className='text-sm'>{data.dueDate || "No Due Date"}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.title || "No Title"}</h2>
      <p className='text-sm mt-2'>
        {data.description || "No description provided"}
      </p>
      <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm rounded-md '>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
