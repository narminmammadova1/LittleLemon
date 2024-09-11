import React, { useReducer } from 'react'
import ReservationForm from '../../components/ReservationForm'
 import styles from "./ReservationPage.module.css"
import InformationForm from '../../components/InformationForm'
import { fetchAPI } from '../../api';




const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

function timesReducer(state,action){
switch(action.type){
  case "Update_Time":
    return fetchAPI(action.payload).then(times=>times || initialTimes);
    default:
      return state
}


}


const ReservationPage = () => {

  


 const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);

const updateTimes=(date)=>{

  dispatch({type:"Update_Time",payload:date})
}

  return (
<div className={styles.reservPage}>
      {/* <header><img src="/svg/arrow.svg" alt="arrow" /></header> */}
      <ReservationForm  availableTimes={availableTimes} updateTimes={updateTimes}  />
    </div>
  
  )
}

export default ReservationPage
