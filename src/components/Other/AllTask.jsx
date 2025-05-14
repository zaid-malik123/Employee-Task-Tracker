import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function AllTask() {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div id='tasklist' className='bg-[#1c1c1c] p-4 rounded mt-2'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between font-bold text-white'>
        {/* Displaying Employee Name first */}
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed</h5>
        <h5 className='w-1/5'>Failed</h5>
      </div>

      <div>
        {userData.map((elem) => (
          <div key={elem.id} className='mb-2 py-2 px-4 flex justify-between border-b border-gray-700'>
            {/* Correcting the order of data */}
            <h2 className='w-1/5 text-lg font-medium text-white'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-lg font-medium text-blue-400'>{elem.taskStats.newTask}</h3>
            <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskStats.active}</h5>
            <h5 className='w-1/5 text-lg font-medium text-green-400'>{elem.taskStats.completed}</h5>
            <h5 className='w-1/5 text-lg font-medium text-red-400'>{elem.taskStats.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTask;
