import React, { useEffect, useState } from 'react'
import styles from "./Reservation.module.css"
import FormModal from '../Modal'
import { useNavigate } from 'react-router-dom'
import useModal from '../../hooks/useModal'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { fetchAPI, submitAPI } from '../../api'
import ROUTER from '../../Constant/Router'



const ReservationForm = ({availableTimes,updateTimes}) => {
  const [showInfo,setShowInfo]=useState(false)
  const [showReserv,setShowReserv]=useState(true)
  const [formErrors, setFormErrors] = useState({});
  const [availableReservationTimes, setAvailableReservationTimes] = useState([]);

const navigate=useNavigate()
const { isOpen, setIsOpen} = useModal();

const today = new Date().toISOString().split('T')[0];

useEffect(() => {
  const getAvailableTimes = async () => {
    try {
      const times = await fetchAPI(today);
      setAvailableReservationTimes(times);
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  getAvailableTimes();
}, [today]);



const validationSchema = Yup.object({
  date: Yup.string().required('Tarih gerekli'),
  time: Yup.string().required('Saat gerekli'),
  guests: Yup.number()
  .min(1, 'it must be from 1 to 10')
  .max(10, 'it must be from 1 to 10')
  .required('required'),
  occasion: Yup.string(),
  place: Yup.string().required("required"),
  name: Yup.string().required("required"),
  surname: Yup.string().required("required"),
  tel: Yup.string().required("required"),
  email: Yup.string()
    .email("write correct email please")
    .required("required"),
});





 const handleClick=(e)=>{
  // e.preventDefault()
setIsOpen(true)

 }

  const formik=useFormik({
initialValues:{
date:"",
time:"",
guests:"",
occasion:"",
place:"",
name:"",
surname:"",
tel:"",
email:""

},
validationSchema: validationSchema,



onSubmit: async (values) => {
  if (formik.isValid) {
    const success = await submitAPI(values);
    if (success) {
      setIsOpen(true);
      navigate(ROUTER.COMFIRMED);
    }
  } else {
    setFormErrors(formik.errors);
  }
},
  })



  const handleModalSubmit = () => {
    formik.handleSubmit();
   alert("successssssssss")
   navigate(ROUTER.COMFIRMED)

   console.log("valuesssssss",formik.values);
   


  };

  const handleDateChange = async (e) => {
    formik.handleChange(e);
    const selectedDate = e.target.value;
    try {
      const times = await fetchAPI(selectedDate);
      setAvailableReservationTimes(times);
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };


const isdisabled=!formik.values.time || !formik.values.date ||!formik.values.guests  && !formik.values.occasion || !formik.values.place 
    const isdisabledBtn=!formik.values.name || !formik.values.surname || !formik.values.tel || !formik.values.tel || !formik.values.email || !formik.isValid
return (
    <div >
      <form onSubmit={formik.handleSubmit}   className={styles.formDiv}  action="">
        <div className={styles.reservDiv} 
        
        style={{display: showReserv ?"flex":"none"}}>
      <header><img onClick={()=>navigate("/")} src="/svg/arrow.svg" alt="arrow" /></header>

        <h1>Reserve a table</h1>

<label htmlFor="res-date">Date</label>
<input className={styles.input} id="res-date" type="date" 
value={formik.values.date}

onChange={handleDateChange}
onBlur={formik.handleBlur}
name="date"
required
/>
{formik.touched.date && formik.errors.date ? <div className={styles.error} >{formik.errors.date}</div> : null}


<label htmlFor="res-time">Time</label>
<select id="res-time" value={formik.values.time}
name="time"
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
 required
>
    <option value="17:00">17:00</option>
    <option value="18:00">18:00</option>
    <option value="19:00">19:00</option>
    <option value="20:00">20:00</option>
    <option value="21:00">21:00</option>
    <option value="22:00">22:00</option>
</select>
{formik.touched.time && formik.errors.time ? <div className={styles.error}>{formik.errors.time}</div> : null}


<label htmlFor="guests">Number of guests</label>
<input className={styles.input} id="guests" 
name="guests"
value={formik.values.guests} 
onChange={formik.handleChange}
onBlur={formik.handleBlur}
type="number" min="1" max="10"
required />

{formik.touched.guests && formik.errors.guests ? <div className={styles.error}>{formik.errors.guests}</div> : null}

<label htmlFor="occasion">Occasion</label>
<select onChange={formik.handleChange} value={formik.values.occasion} id="occasion" required name="occasion">

<option value="Birthday">Birthday</option>
<option value="Anniversary">Anniversary</option>

</select>

<label htmlFor="place" >Place</label>
<div className={styles.radio}>
<label htmlFor="outside">
<input
 type="radio"
 id="outside"
 name="place"
 value="Outside"
 checked={formik.values.place === 'Outside'}
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
 required

 className={styles.radiobtn} /> Outside
</label>

<label htmlFor="inside">
<input
  type="radio"
  id="inside"
  name="place"
  value="Inside"
  checked={formik.values.place === 'Inside'}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  required
className={styles.radiobtn}  
/>Inside</label>
</div>

{formik.touched.place && formik.errors.place ? <div className={styles.error}>{formik.errors.place}</div> : null}

<button className={isdisabled ? styles.disabled : styles.resBtn} disabled={isdisabled} type="button" onClick={(event)=>{
  event.preventDefault()
  setShowReserv(!showReserv)
  setShowInfo(!showInfo)
}
  
}  >Reserve</button>

</div>

<div className={styles.infoDiv}
style={{display :showInfo? "flex" :"none"}}>
      <header><img  onClick={()=>{setShowReserv(true)
        setShowInfo(false)
      }} src="/svg/arrow.svg" alt="arrow" /></header>

<h1>Add your Informations</h1>


<label htmlFor="res-date">Name</label>
<input className={styles.input} id="name" type="text" name="name"

value={formik.values.name}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required
/>
{formik.touched.name && formik.errors.name ? <div className={styles.error}>{formik.errors.name}</div> : null}


<label htmlFor="surname">Surname</label>
<input className={styles.input} id="surname" name="surname" type="text"
 value={formik.values.surname}
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
 required
/>
{formik.touched.surname && formik.errors.surname ? <div>{formik.errors.surname}</div> : null}

<label htmlFor="tel">Tel</label>
<input className={styles.input} id="tel" type="tel" required  onChange={formik.handleChange} 
onBlur={formik.handleBlur}  />

{formik.touched.tel && formik.errors.tel ? <div className={styles.error}>{formik.errors.tel}</div> : null}

<label htmlFor="email">Email</label>
<input className={styles.input} id="email" required type="email"  
onChange={formik.handleChange} 
onBlur={formik.handleBlur} />

{formik.touched.email && formik.errors.email ? (
        <div className={styles.error}>{formik.errors.email}</div>
      ) : null}

<button type="button"
 onClick={handleClick}  
 className={isdisabledBtn ? styles.disabled : styles.resBtn} >Reserve</button>
</div>





      </form>

      <FormModal
       isOpen={isOpen} setIsOpen={setIsOpen}  
       handleModalSubmit={handleModalSubmit} 
       />

    </div>
  )
}

export default ReservationForm





