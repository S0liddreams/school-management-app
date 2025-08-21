import Image from 'next/image'
import React from 'react'

const Navebar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/**SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] bg-[#99d5f5]  ring-white px-2'>
        <Image src="src" alt="alt" width={14} height={14} />
        <input className='w-[200px] p-2 outline-none' type="text" placeholder='Search...' />
      </div>
      {/**ICONS AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-[#99d5f5] rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src="/email.png" alt="alt" width={20} height={20} />
        </div>
        <div className='bg-[#99d5f5] rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image src="/announcement.png" alt="alt" width={20} height={20} />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-[#d62828] text-white rounded-full text-xs'>1</div>
        </div>

        <div className='flex flex-col'>
          <span className='text-xs text-white  leading-3 font-medium'>Daniel Uche</span>
          <span className='text-[10px] text-white text-right'>Admin</span>

        </div>
        <Image className='rounded-full bg-[#99d5f5] border-white border' src="/profile.png" alt="alt" width={36} height={36} />


      </div>


    </div>
  )
}

export default Navebar