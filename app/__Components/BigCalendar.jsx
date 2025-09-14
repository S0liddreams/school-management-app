"use client"

import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '../../lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react'

const localizer = momentLocalizer(moment)
const today = new Date();

const BigCalendar = () => {
  const [view, setView] = useState(Views.WORK_WEEK)
  

  return (
    
  <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={[Views.WORK_WEEK, Views.DAY]}
      view={view}
      onView={setView}
      defaultDate={today}
      min={new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0)}
      max={new Date(today.getFullYear(), today.getMonth(), today.getDate(), 17, 0)}
      style={{ height: "98%" }}
    />
    
  )
}

export default BigCalendar
