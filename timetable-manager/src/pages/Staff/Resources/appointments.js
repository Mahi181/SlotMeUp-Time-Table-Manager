
import React,{ useEffect,useMemo,useCallback } from "react";
import { getTimetable } from "../../../lib/api";
import useHttp from "../../../lib/use-http";


export const appoint = [
  {
    title: 'Website Re-Design Plan',
    startDate: new Date("2022-17-10T06:30:00.000Z"),
    endDate: new Date("2022-17-10T07:30:00.000Z"),
    location: 'Room 1',
    id: 0,
    roomId:1
    
  }, {
    title: 'Book Flights to San Fran for Sales Trip',
    startDate: new Date(2022, 9, 17, 12, 0),
    endDate: new Date(2022, 9, 17, 13, 0),
    id: 0,
    location: 'Room 1',
  }, {
    title: 'Install New Router in Dev Room',
    startDate: new Date(2018, 5, 27, 14, 0),
    endDate: new Date(2018, 5, 27, 15, 0),
    id: 2,
    location: 'Room 2',
  }, ]




  
  
const Appointment=()=>{
  


return (
  <React.Fragment></React.Fragment>
)

  
}

export default React.memo(Appointment);



