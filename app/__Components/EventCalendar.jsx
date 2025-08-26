"use client"

import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


//TEMPORARY
const event = [
  {
    id: 1,
    title: "lorem isufkdjsksjsksksk",
    time: "12:00 PM - 2:00 PM",
    description: "lorem ipsum dolor sit amet"
  },
  {
    id: 2,
    title: "lorem isufkdjsksjsksksk",
    time: "12:00 PM - 2:00 PM",
    description: "lorem ipsum dolor sit amet"
  },
  {
    id: 3,
    title: "lorem isufkdjsksjsksksk",
    time: "12:00 PM - 2:00 PM",
    description: "lorem ipsum dolor sit amet"
  },
]

const EventCalendar = () => {
     const [value, onChange] = useState(new Date());
  return (
    <div className='bg-white p-4 rounded-md'><Calendar onChange={onChange} value={value} />
    <div className='flex items-center justify-between'>
      <h1 className='text-xl font-semibold py-4'>Events</h1>
      <Image src="/dots.png" alt="alt" width={20} height={20} />
    </div>
    <div className='flex flex-col gap-4'>
      {event.map(event=>(

        <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-[#065d8c] even:border-t-[#E5B80B]' key={event.id}>
          <div className='flex items-center justify-between'>
            <h1 className='font-semibold text-gray-600'>{event.title}</h1>
            <span className='text-[#d62828] text-xs'>{event.time}</span>
          </div>
          <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
        </div>
      ))}

    </div>
    </div>
  )
}

export default EventCalendar 