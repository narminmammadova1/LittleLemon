import React, { useState } from 'react'

const useModal = () => {
    const [modal,setModal]=useState(false)

    const [isOpen,setIsOpen]=useState(false)
     const open=()=>setIsOpen(true)
     const close=()=>setIsOpen(false)


  return  {isOpen,setIsOpen,open,close,modal,setModal}

    
}

export default useModal
