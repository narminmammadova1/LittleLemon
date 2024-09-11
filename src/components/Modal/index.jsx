// import React from 'react'
// import styles from "./Modal.module.css"
// import useModal from '../../hooks/useModal'


// const FormModal = () => {

//     const {isOpen,setIsOpen,open,close}=useModal()

//   return (
//     <div className={styles.modalDiv}>
// <div className={styles.modalContent}>
//     <div  className={styles.headerDiv}>
//         <img onClick={setIsOpen(false)} src="/svg/x.svg" alt="x" />
        
//     </div>
//     <p>Are you Sure?</p>
//     <div className={styles.btnDiv}>
//         <button className={styles.okBtn}>Ok</button>
//         <button  onClick={setIsOpen(false)}  className={styles.cancelBtn}>Cancel</button>
//     </div>
// </div>
//     </div>
//   )
// }

// export default FormModal


import React, { useState } from 'react';
import styles from './Modal.module.css';
import useModal from '../../hooks/useModal';
import { useNavigate } from 'react-router-dom';
import ROUTER from '../../Constant/Router';

const FormModal = ({isOpen,setIsOpen,handleModalSubmit}) => {
    // const { isOpen, setIsOpen, open, close,modal,setModal } = useModal();

    const navigate=useNavigate()
    return (
        <div className={styles.modalDiv}
        style={{display:isOpen ? "flex" :"none"}}
        >
            <div className={styles.modalContent}>
                <div className={styles.headerDiv}>
                    <img 
                        onClick={() => setIsOpen(false)} 
                        src="/svg/x.svg" 
                        alt="x" 
                    />
                </div>
                <p>Are you Sure?</p>
                <div className={styles.btnDiv}>
                    <button type="button" onClick={()=>{
handleModalSubmit()       
// navigate(ROUTER.COMFIRMED)
                 setIsOpen(false)
                    }} className={styles.okBtn}>Ok</button>
                    <button 
                        onClick={() => setIsOpen(false)} 
                        className={styles.cancelBtn}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormModal;
