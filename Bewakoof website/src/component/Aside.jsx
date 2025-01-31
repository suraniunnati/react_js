import React from 'react'

function Aside() {
  return (
    <div className='p-5 ms-5'>
        <div className='border-b-2 h-[50px]'>
            <h1 className='text-xl font-semibold'>Filters</h1>
        </div>
        <div>
            <div className='flex items-center justify-between h-[40px]'><li>Category</li>
            <i className="fa-solid fa-angle-down"></i>
            <i className="fa-solid fa-angle-up hidden"></i>
            </div>
            <div className=' ms-4'>
                <input type="chackbox" className='w-[20px] h-[20px] border-2 border-gray-400 rounded-md me-3 mt-3'/><span className='text-gray-400'>T-Shirt</span><br/>
                <input type="chackbox" className='w-[20px] h-[20px] border-2 border-gray-400 rounded-md me-3 mt-3'/><span className='text-gray-400'>Shirt</span><br/>
                <input type="chackbox" className='w-[20px] h-[20px] border-2 border-gray-400 rounded-md me-3 mt-3'/><span className='text-gray-400'>Joggers</span><br/>
                <input type="chackbox" className='w-[20px] h-[20px] border-2 border-gray-400 rounded-md me-3 mt-3'/><span className='text-gray-400'>Hoodies</span><br/>
                <input type="chackbox" className='w-[20px] h-[20px] border-2 border-gray-400 rounded-md me-3 mt-3'/><span className='text-gray-400'>Pant</span><br/>
                <input type="chackbox" className='w-[20px] h-[20px] border-2 border-gray-400 rounded-md me-3 mt-3'/><span className='text-gray-400'>Dress</span><br/>
                <input type="chackbox" className='w-[20px] h-[20px] border-2 border-gray-400 rounded-md me-3 mt-3'/><span className='text-gray-400'>Jacket</span><br/>
            </div>
        </div>
    </div>
  )
}

export default Aside