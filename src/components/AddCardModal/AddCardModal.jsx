import React, { useState } from 'react'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import css from './AddCardModal.module.css'

const AddCardModal = ({visible, onClose,handleCardAdd}) => {
  const customStyles = {
         background: "rgb(58,58,58)",
         padding: "20px",
         width: "50%",
         top: "-3rem",
         height: "fit-content",
         maxWidth: "40rem"
  }

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  return (
    <Rodal customStyles = {customStyles} visible = {visible} onClose = {onClose}>
         <div className={css.container}>
           <div>
              <span className={css.label}>Card Title</span>
              <input type='text' className={css.input} value ={title} onChange={(e) =>setTitle(e.target.value) }/>
           </div>

           <div>

              <span className={css.label}>Details</span>
              <textarea  id="" cols="30" rows="10" className={css.input} type='text' value={details} onChange={(e) =>setDetails(e.target.value) }/>
           </div>

           <button
           disabled = {title === "" && details === ""}
           className={css.saveButton}
           onClick={()=>{handleCardAdd(title,details)
          setDetails("")
          setTitle("")
          }}
           > Add </button>
         </div>
    </Rodal>
  )
}

export default AddCardModal