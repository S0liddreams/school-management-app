import UserCard from '@/app/__Components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
     { /**LEFT */}
     <div className='w-fit lg:w-2/3'>
     {/**USER CARDS */}
     <div className="flex gap-4 justify-between flex-wrap">
      <UserCard type="students"/>
      <UserCard type="teacher"/>
      <UserCard type="parents"/>
      <UserCard type="staff"/>
     </div>
     
     </div>
     { /**RIGHT */}
     <div className='w-fit lg:w-1/3'>R</div>
    </div>
  )
}

export default AdminPage