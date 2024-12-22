import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {
  const {doctors}=useContext(AppContext)
  return (
    <div className=''>
      <p>My Appointments</p>
      <div>
        {
          doctors.slice(0,2).map((item,index)=>(
            <div key={index}>
              <div>
                <img src={item.image} alt="" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointment
