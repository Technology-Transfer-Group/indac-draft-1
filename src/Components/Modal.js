import React,{useEffect} from 'react'
import closebtnpic from "../assets/img/icons8-macos-close-90.png"
const Modal = ({title,p1,p2,button1,button2,buttonname1,buttonname2}) => {
    useEffect(() => {
        const modal = document.querySelector('.modalbox'),
        overlay = document.querySelector('.overlay'),
        closebtn = document.querySelector(".closebtnpic")
      
     
      // ---- ---- Close Modal Overlay---- ---- //
      overlay.addEventListener('click', () => {
        modal.classList.remove('active');
      });
      closebtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    
      return () => {
          // ---- ---- Close Modal Overlay---- ---- //
          overlay.removeEventListener('click', () => {
            modal.classList.remove('active');
          });
          closebtn.removeEventListener('click', () => {
            modal.classList.remove('active');
          });
      }
    }, [])
    
  return (
    <div className='modal_container'>
      <div class="overlay"></div>
      <div class="modal__box">
        <img src={closebtnpic} className='closebtnpic' alt="" srcset="" />
        <h3 class="modal__title">{title}</h3>
        <p class="modal__text">
          {p1}
        </p>
        <p class="modal__text">
         {p2}
        </p>
        {/* <div class="buttons">
          <button class="btn modal__button modal__button--yes" onClick={button1}>{buttonname1}</button>
          <button class="btn modal__button modal__button--no" onClick={button2}>{buttonname2}</button>
        </div> */}
      </div>
      </div>
  )
}

export default Modal